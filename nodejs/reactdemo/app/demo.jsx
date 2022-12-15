
'use client'

import {useState} from 'react'

export default function MyClientComponent() {
    const [myVal, setMyVal] = useState(0)
    return (<h1>{ myVal }</h1>)
}