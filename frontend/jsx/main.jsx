import React from "react";
import {A, navigate} from 'hookrouter'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default ({start = '0', variant = '0'}) => {
    let s = start == 'a8' ? 1 : 2;
    if(start != '0' && variant == '0'){
      navigate('/' + start + '/' + '1' + '/')
    }

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
