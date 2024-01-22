import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'regenerator-runtime/runtime'
import SpeechRecognitionComponent from './components/SpeechRecognition'
import TextEditing from './components/TextEditing'

function App() {

    const [transcript, setTranscript] = useState('');

  const handleTranscriptionChange = (newTranscription) => {
    setTranscript(newTranscription);
  };

  return (
    
        <div>
      <SpeechRecognitionComponent onTranscriptionChange = {handleTranscriptionChange} />
      < TextEditing transcribedText={transcript}/>
    </div>
  
  )
}

export default App
