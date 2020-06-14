import React from 'react'
import Square from './single_square.jsx'

export default ({variant})=>{
    return(
        <div className = "board">
            {
                variant.map((numb, i)=>{
                    return <Square key={i} number = {i+1} value = {numb} />
                })
            }
        </div>
    )
}