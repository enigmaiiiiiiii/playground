import React from 'react'

const tt = new Date().toISOString() 
const tv = process.env.TEST_ENV
console.log(`[${tt}] TEST_ENV: ${tv}`)

export default function DashBoard() {
  return <>app dashboard</> 
}
