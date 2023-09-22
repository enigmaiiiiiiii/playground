import React from 'react'

const tt = new Date().toISOString()
const tv = process.env.TEST_ENV
console.log(`[${tt}] TEST_ENV: ${tv}`)

export default function Home() {
  const [data, setData] = React.useState(null)

  const ref = React.useRef(null)

  return (
    <>
      <div className="bg-yellow-400"></div>
    </>
  )
}
