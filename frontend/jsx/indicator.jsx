import React from 'react'

export default ({speed=2})=>{
    let list =[]
    for(let i=0;i<=4;i++){
        list.push(<div key={i} className={i<=speed?"unit active":"unit"}></div>)
    }
    return(
        <div className="indicator">
            <div className="overlay"></div>
            {list}
        </div>
    )
}