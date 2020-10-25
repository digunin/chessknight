const boardSize = 8
const move_variants = [[1,2], [2,1], [-1,2], [2,-1], [-1,-2], [-2,-1], [-2,1], [1,-2]];
const board = [];
const totalSqueres = boardSize*boardSize;
var needAlterMove = 0

class ChessError extends Error{}

function init(){
    for(let i=0;i<boardSize;i++){
        board[i] = [];
        for(let j=0;j<boardSize;j++){
            board[i][j] = 0;
        }
    }
    freeSqueresCount = totalSqueres;
    move_counts = 0;
}

function exists(x, y){
    if((x<0||y<0)||(x>=boardSize||y>=boardSize)) return false;
    return true;
}

function isFree(x, y){
    if(board[x][y] == 0) return true;
    return false;
}

function isValid(x, y){
    if(exists(x,y)&&isFree(x,y)) return true;
    return false;
}

function getStart(start){
    if(start<1||start>boardSize*boardSize){
        start = 1;
    }
    start-=1;
    x = start%boardSize;
    y = Math.floor(start/boardSize)
    return {x, y};
}

function printBoard(){
    for(let i = 0;i<boardSize;i++){
        str = ""
        for(let j = 0;j<boardSize;j++){
            str+=board[j][i];
            if(board[j][i] < 10) str+=" ";
            str+="  ";
        }
        console.log(str);
        console.log("");
    }
}

function fixBoard(){
    let newArr = [[],[],[],[],[],[],[],[]];
    for(let i = 0;i<boardSize;i++){
        for(let j = 0;j<boardSize;j++){
            newArr[i][j] = board[j][i];
        }
    }
    return newArr
}

function printBoardInLine(arr){
    simpleArray = []
    arr.map(line=>line.map(num=>simpleArray.push(num)))
    console.log("["+simpleArray.join(",")+"],")
}

function getAllValid(x,y){
    allNextMoves = move_variants.map(steps=>[x+steps[0], y+steps[1]]);
    return allNextMoves.filter(a=>isValid(a[0],a[1]));
}

function bestNextMove(x,y){
    let allValid = getAllValid(x,y);
    if(allValid.length == 0) return false;
    let bestMove = allValid[0];
    let allValidForNext = getAllValid(bestMove[0], bestMove[1]);
    let min = allValidForNext.length;
    for(let step of allValid){
        let count = getAllValid(step[0], step[1]).length;
        if (count < min){
            bestMove = step;
            min = count;
        }
    }
    let previous = []
    if(move_counts == needAlterMove){
        allValid = allValid.filter(n=>(n[0]!=bestMove[0] || n[1]!=bestMove[1]))
        previous = allValid[0];
        if(!previous) throw new ChessError();
        min = getAllValid(previous[0], previous[1]).length;
        for(let step of allValid){
            let count = getAllValid(step[0], step[1]).length;
            if (count < min){
                previous =  step;
                min = count;
            }
        }
    }
    if(move_counts == needAlterMove) return previous;
    return bestMove;
}

function moveKnight(x, y){
    if(move_counts==10000) return false
    move_counts++;
    freeSqueresCount--;
    board[x][y] = totalSqueres - freeSqueresCount;
    
    if(freeSqueresCount == 0) return true;
    let tmp = bestNextMove(x,y);
    if(tmp !== false){
        if(moveKnight(tmp[0], tmp[1])) return true
    }

    /* В этот блок я попадал только с нечетным размером доски */
    for(let step of move_variants){
        let newX = x+step[0];
        let newY = y+step[1];
        if(newX == tmp[0]&&newY == tmp[1]) continue;
        if(isValid(newX, newY)){
            if(moveKnight(newX, newY)) return true
        }  
    }/* В этот блок я попадал только с нечетным размером доски */

    freeSqueresCount++;
    board[x][y] = 0;
    return false;
}

console.log("test = [")
console.log("[")
console.log("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]")
console.log("],")
for(let n = 1;n<=64;n++){
    let {x:a, y:b} = getStart(n);
    needAlterMove = 0;
    console.log("[")
    for(let success = 0;success<10;){
        init();
        try {
            if(moveKnight(a, b)){
                printBoardInLine(fixBoard(board))
                success++
                needAlterMove++
            }else{
                needAlterMove++
            }
        } catch (e) {
            if(e instanceof ChessError){
                needAlterMove++;
            }else throw e        
        }
    }
    console.log("],")
}
console.log("]")