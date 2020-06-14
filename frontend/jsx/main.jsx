import React from "react"
import GetVariants from '../gql/board.graphql'
import {useQuery} from '@apollo/react-hooks'
import {convertCoordToNumber as convert, errorVariant, loadingVariant} from './utils'
import Board from './board.jsx'

export default ({start = '0', variant = '0'}) => {

    let s = convert(start)

    const { loading, error, data } = useQuery(GetVariants, {variables:{start: s}})
    
    return(
        <div className = "main">
            {loading&&<Board variant={loadingVariant} />}
            {error&&<Board variant={errorVariant} />}
            {!error&&!loading&&data&&<Board variant={data.board[0]}/>}
        </div>
    )
}
