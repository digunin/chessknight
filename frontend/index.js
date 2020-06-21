import React from "react";
import ReactDOM from "react-dom";
import App from './jsx/App.jsx';
import {getCookie} from './jsx/utils'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    request: (operation) => {
        const token = getCookie('csrftoken')
        operation.setContext({
            headers: {
                "X-CSRFToken": token,
            }
        })
    }
})

ReactDOM.render(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"));