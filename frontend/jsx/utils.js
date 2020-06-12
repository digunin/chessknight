const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export const convertCoordToNumber = (coord) => {

    // переводит координаты вида "e2" в порядковый номер клетки в массиве
    // "a8" это первая клетка, "h1" - 64
    
    if (coord == '0') return 0
    let y = 8 - (+coord[1])
    let x = xCoords.indexOf(coord[0])
    let numb = y*8+x+1
    console.log(numb)
    return numb
}