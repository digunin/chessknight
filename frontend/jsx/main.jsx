import React from "react"
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert} from './utils'
import Square from './single_square.jsx'

export default ({start = '0', variant = '0'}) => {

    let s = convert(start)

    const { loading, error, data } = useQuery(GetVariants, {variables:{start: s}})
    return(
        <div className = "board">
            {loading&&<div>...Загрузка</div>}
            {error&&<div>Ошибка</div>}
            {!error&&!loading&&data&&!!data.board.length&&
                data.board[0].map((numb, i)=>{
                    return <Square key={i} number = {i+1} value = {numb} />
                })
                }
        </div>
    )
}
