import React, {useState, useEffect} from "react"
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert, errorVariant, loadingVariant} from './utils'
import Board from './board.jsx'
import Navbar from './navbar.jsx'
import ControlPanel from './controlpanel.jsx'

export default ({start = '0', variant = '1'}) => {
    const [currentSquare, setCurrentSquare] = useState(64)
    const [paused, setPaused] = useState(false)
    const { loading, error, data } = useQuery(GetVariants, {variables:{start: s}})
    
    useEffect(()=>{
        let id=null
        if(currentSquare < 64){
            if(paused)return
            id = setTimeout(()=>setCurrentSquare(currentSquare+1), 200)
            console.log("start timeout");
            
        }
        return(()=>{
            if(id!=null){
                clearTimeout(id)
                console.log("clear ------------ timeout")
            }
        })
    })

    let s = convert(start)
    let variantData = []
    let count = 0

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
            <Board currentSquare={currentSquare} variant={variantData}/>
            <ControlPanel 
                onStart={()=>{setCurrentSquare(0)}} 
                onStop={()=>setCurrentSquare(64)} 
                onPause={()=>setPaused(!paused)} 
                onPlus={()=>alert("Быстрее")} 
                onMinus={()=>alert("Медленнее")}/>
        </div>
    )
}
