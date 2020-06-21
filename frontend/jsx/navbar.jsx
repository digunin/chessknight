import React from 'react'
import {A} from 'hookrouter'

export default ({start, count, current})=>{
    let list = []
    current = start =="0"?0:current
    for(let i=1;i<=count;i++){
        list.push(
        <A  key={i} 
            className={i==current?"navbutton active":"navbutton"} 
            href = {start=="0"?"":"/"+start+"/"+i+"/"}>
            {i}
        </A>
        )
    }
    return(
        <div className="navbar">
            {list}
        </div>
    )
}