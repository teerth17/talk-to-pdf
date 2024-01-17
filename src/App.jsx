import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'regenerator-runtime/runtime'
import SpeechRecognitionComponent from './components/SpeechRecognition'

function App() {
  const [count, setCount] = useState(0)

  return (
    
        <div>
      <SpeechRecognitionComponent />
    </div>
  
  )
}

export default App
