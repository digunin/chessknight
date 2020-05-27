import React from "react";
import {A} from 'hookrouter'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default ({start = 'a8', variant = '1'}) => {
    let s = start == 'a8' ? 1 : 2;

    const { loading, error, data } = useQuery(gql`
    {
      variant(start: ${s}, position: ${variant})
    }
  `)
    return(
        <div>
            <h1>Привет, реакт!</h1>
            <A href="/a8/1/"> a8 - 1 </A><br/>
            <A href="/a8/2/"> a8 - 2 </A><br/>
            <A href="/b8/1/"> b8 - 1 </A><br/>
            <A href="/b8/2/"> b8 - 2 </A><br/>
            {loading&&<div>...Загрузка</div>}
            {error&&<div>Ошибка</div>}
            {!loading&&data&&<div>{data.variant}</div>}
        </div>
    )
}
