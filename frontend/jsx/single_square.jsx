import React from 'react'
import {A} from 'hookrouter'
import {convertNumberToCoord as convert} from './utils'

 const Square = ({subclass = "darksquare", number = 0, value = 0})=>{
    return(
        <div className = {"square " + subclass}>
            <A href = {"/" + convert(number) + "/1/"}>{value==0?'':value}</A>
        </div>
    )
}

export default React.memo(Square)
