import React, {useState, useEffect} from "react"
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert, errorVariant, loadingVariant} from './utils'
import Board from './board.jsx'
import Navbar from './navbar.jsx'
import ControlPanel from './controlpanel.jsx'

export default ({start = '0', variant = '1'}) => {
    const [path, setPath] = useState("_"+start+variant)
    const [currentSquare, setCurrentSquare] = useState(64)
    const [paused, setPaused] = useState(false)
    const { loading, error, data } = useQuery(GetVariants, {variables:{start: convert(start)}})
        
    const getPath = ()=>("_" + start + variant)
    const pathChanged = ()=>("_"+start+variant !== path)

    useEffect(()=>{
        if(pathChanged()){
            setCurrentSquare(64)
            setPaused(false)
            setPath(getPath())
            return
        }
        let id=null
        if(currentSquare < 64){
            if(paused)return
            id = setTimeout(()=>setCurrentSquare(currentSquare+1), 200)
        }
        return(()=>{
            if(id!=null){
                clearTimeout(id)
            }
        })
    })

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
                onStart={()=>{if(start !== "0")setCurrentSquare(0)}} 
                onStop={()=>setCurrentSquare(64)} 
                onPause={()=>setPaused(!paused)} 
                onPlus={()=>alert("Быстрее")} 
                onMinus={()=>alert("Медленнее")}/>
        </div>
    )
}
