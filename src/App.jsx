import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'regenerator-runtime/runtime'
import SpeechRecognitionComponent from './components/SpeechRecognition'
import TextEditing  from './components/TextEditing'
import PdfCreation from './components/PdfCreation'

function App() {

    const [transcript, setTranscript] = useState('');
    const [text,setText] = useState('')

  const handleTranscriptionChange = (newTranscription) => {
    setTranscript(newTranscription);
  };
  const handleTextChange = (newText) => {
    setText(newText);
  };


   

  return (
    
        <div>
      <SpeechRecognitionComponent onTranscriptionChange = {handleTranscriptionChange} onTextChange={handleTextChange} />
     {/* <TextEditing transcribedText={transcript} onTextChange={handleTextChange}  /> */}
      <PdfCreation textContent={text} />
    </div>
  
  )
}

export default App
