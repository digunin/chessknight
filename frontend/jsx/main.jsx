import React from "react";
import {A, navigate} from 'hookrouter'
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert} from './utils'

export default ({start = '0', variant = '0'}) => {
    
    let s = convert(start)

    const { loading, error, data } = useQuery(GetVariants, {variables:{start: s}})
    console.log(data)
    return(
        <div>
            <A href="/a8/1/"> a8 - 1 </A><br/>
            <A href="/a8/2/"> a8 - 2 </A><br/>
            <A href="/b8/1/"> b8 - 1 </A><br/>
            <A href="/b8/2/"> b8 - 2 </A><br/>
            {loading&&<div>...Загрузка</div>}
            {error&&<div>Ошибка</div>}
            {!loading&&data&&!!data.board.length&&<div>{data.board[+variant-1]}</div>}
        </div>
    )
}
