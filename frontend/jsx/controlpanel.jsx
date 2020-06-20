import React from 'react'

export default ({onStart, onStop, onPause, onPlus, onMinus, period})=>{
    return(
        <div className="controlpanel">
            <div onClick={onStart} className="controlbutton">Старт</div>
            <div onClick={onPause} className="controlbutton">Пауза</div>
            <div onClick={onStop} className="controlbutton">Стоп</div>
            <div onClick={onPlus} className="controlbutton">+</div>
            <div className="interval"><p>{period}</p><p>мс</p></div>
            <div onClick={onMinus} className="controlbutton">-</div>
        </div>
    )
}
