import React from 'react'
import {A} from 'hookrouter'
import {convertNumberToCoord as convert} from './utils'

export default ({subclass = "dark", number = 0, value = ""})=>{
    return(
        <div className = {"square " + subclass}>
            <A href = {"/" + convert(number) + "/1/"}>{value==0?'':value}</A>
        </div>
    )
}