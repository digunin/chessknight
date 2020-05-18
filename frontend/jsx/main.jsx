import React from "react";
import {A} from 'hookrouter'

export default ({start = 'a8', variant = '1'}) => {
    return(
        <div>
            <h1>Привет, реакт!</h1>
            <A href="/e4"> e4 </A>
            <A href="/h5/6"> h5 </A>
            <A href="/tgh/45/64"> tgh </A>
            <div>start = {start}</div>
            <div>variant = {variant}</div>
        </div>
    )
}
