import React from "react";
import {useRoutes} from 'hookrouter'
import routes from './routes.jsx'

export default () => {
    const routeResult = useRoutes(routes)
    return routeResult||<h1>404</h1>
}
