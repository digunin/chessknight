import React from 'react'
import Indicator from './indicator.jsx'

export default ({onStart, onStop, onPause, onPlus, onMinus, speed})=>{
    return(
        <div className="controlpanel">
            <div onClick={onStart} className="controlbutton"><img src="/static/images/play.svg" alt=""/></div>
            <div onClick={onPause} className="controlbutton"><img src="/static/images/pause.svg" alt=""/></div>
            <div onClick={onStop} className="controlbutton"><img src="/static/images/stop.svg" alt=""/></div>
            <div onClick={onMinus} className="controlbutton"><img src="/static/images/previous.svg" alt=""/></div>
            <Indicator speed = {speed} />
            <div onClick={onPlus} className="controlbutton"><img src="/static/images/next.svg" alt=""/></div>
        </div>
    )
}
