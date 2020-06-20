import React from 'react'
import Indicator from './indicator.jsx'

export default ({onStart, onStop, onPause, onPlus, onMinus, speed})=>{
    return(
        <div className="controlpanel">
            <div onClick={onStart} className="controlbutton">Старт</div>
            <div onClick={onPause} className="controlbutton">Пауза</div>
            <div onClick={onStop} className="controlbutton">Стоп</div>
            <div onClick={onPlus} className="controlbutton">+</div>
            <Indicator speed = {speed} />
            <div onClick={onMinus} className="controlbutton">-</div>
        </div>
    )
}
