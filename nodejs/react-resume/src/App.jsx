import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Demo from './demo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Demo />
    </div>
  )
}

export default App
