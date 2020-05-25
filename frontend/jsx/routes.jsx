import React from 'react'
import Main from './Main.jsx'

export default {
    '/': () => <Main />,
    '/:start/': ({start}) => <Main start={start} />,
    '/:start/:variant/': ({start, variant}) => <Main start = {start} variant={variant}/>
}