import React, {useState} from "react"
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert, errorVariant, loadingVariant} from './utils'
import Board from './board.jsx'
import Navbar from './navbar.jsx'
import ControlPanel from './controlpanel.jsx'

export default ({start = '0', variant = '1'}) => {
     
    let s = convert(start)
    let variantData = []
    let count = 0

    const { loading, error, data } = useQuery(GetVariants, {variables:{start: s}})
    if(loading){
        variantData = loadingVariant
    }
    if(error){
        variantData = errorVariant
    }
    if(!error&&!loading&&data){
        variantData = data.board[+variant-1]
        count = data.board.length
    }
    
    return(
        <div className = "main">
            <Navbar start={start} count={count} current={+variant}/>
            <Board currentSquare={10} variant={variantData}/>
            <ControlPanel onStart={()=>alert("Старт")} onStop={()=>alert("Стоп")} onPause={()=>alert("Пауза")} onPlus={()=>alert("Быстрее")} onMinus={()=>alert("Медленнее")}/>
        </div>
    )
}
