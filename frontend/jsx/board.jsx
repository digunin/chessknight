import React from 'react'
import Square from './single_square.jsx'

export default ({variant})=>{
    return(
        <div className = "board">
            <div className = "boardlabel toplabel"><p>A</p><p>B</p><p>C</p><p>D</p><p>E</p><p>F</p><p>G</p><p>H</p></div>
            <div className = "boardlabel bottomlabel"><p>A</p><p>B</p><p>C</p><p>D</p><p>E</p><p>F</p><p>G</p><p>H</p></div>
            <div className = "boardlabel leftlabel"><p>8</p><p>7</p><p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>1</p></div>
            <div className = "boardlabel rightlabel"><p>8</p><p>7</p><p>6</p><p>5</p><p>4</p><p>3</p><p>2</p><p>1</p></div>
            <div className = "squares">
            {
                variant.map((numb, i)=>{
                    return <Square key={i} number = {i+1} value = {numb} />
                })
            }
            </div>
        </div>
    )
}