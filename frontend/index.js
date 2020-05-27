import React from "react";
import ReactDOM from "react-dom";
import App from './jsx/App.jsx';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
})

ReactDOM.render(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"));