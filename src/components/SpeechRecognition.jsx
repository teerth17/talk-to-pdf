import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TextEditing from './TextEditing';

const SpeechRecognitionComponent = ({onTranscriptionChange}) => {
  const {
    transcript,
      browserSupportsSpeechRecognition,
      resetTranscript,
    listening
    } = useSpeechRecognition();
    
    if (!browserSupportsSpeechRecognition) {
        // Render some fallback content
        return null
  }
  
   useEffect(() => {
    onTranscriptionChange(transcript);
   }, [transcript, onTranscriptionChange]);
  
  
    console.log(transcript)
  const handleStart = () => {
     SpeechRecognition.startListening({
  continuous: true,
  language: 'en-IN'
});
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    resetTranscript();
  };

  return (
    <div>
      <h2>Speech Recognition</h2>
      <p >Transcript: {transcript}</p>
      <p>Listening: {listening ? 'Yes' : 'No'}</p>

      <button onClick={handleStart} >
        Start Listening
      </button>
      <button onClick={handleStop} >
        Stop Listening
      </button>
      <button onClick={handleReset}>
        Reset Transcript
      </button>
      <TextEditing transcribedText={transcript} />
    </div>
  );
};

export default SpeechRecognitionComponent;