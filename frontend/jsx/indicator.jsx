import React from 'react'

export default ({speed=2})=>{
    const class_names = ["unit1", "unit2", "unit3", "unit4", "unit5"]
    return(
        <div className="indicator">
            {
                class_names.map((value, i)=>{
                    let name = "unit "+value
                    if(i<=speed){
                        name+=" active"
                    }
                    console.log("speed = "+speed+", i = "+i)
                    return <div key={i} className={name}></div>
                })
            }
        </div>
    )
}