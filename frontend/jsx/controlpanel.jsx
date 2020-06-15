import React from 'react'

export default ({onStart, onStop, onPause, onPlus, onMinus})=>{
    return(
        <div className="controlpanel">
            <button onClick={onStart} className="controlbutton">Старт</button>
            <button onClick={onPause} className="controlbutton">Пауза</button>
            <button onClick={onStop} className="controlbutton">Стоп</button>
            <button onClick={onPlus} className="controlbutton">+</button>
            <div className="interval"><p>0,2</p><p>сек</p></div>
            <button onClick={onMinus} className="controlbutton">-</button>
        </div>
    )
}