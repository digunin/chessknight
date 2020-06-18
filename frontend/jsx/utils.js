const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export const errorVariant = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'о','ш','и','б','к','а',0,0,'о','ш','и','б','к','а',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
export const loadingVariant = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'з','а','г','р','у','з','к','а','з','а','г','р','у','з','к','а',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
export const periods = [1000, 500, 200, 100, 20]

export const convertCoordToNumber = (coord) => {

    // переводит координаты вида "e2" в порядковый номер клетки в массиве
    // "a8" это первая клетка, "h1" - 64
    
    if (coord == '0') return 0
    let y = 8 - (+coord[1])
    let x = xCoords.indexOf(coord[0])
    let numb = y*8+x+1
    return numb
}

export const convertNumberToCoord = (number)=>{

    // переводит порядковый номер в координаты вида "e2"

    let result = ""
    let x = number%8
    x = x == 0 ? 8 : x
    result += xCoords[x - 1]
    result += (8 - Math.trunc((number-1)/8))
    return result
}