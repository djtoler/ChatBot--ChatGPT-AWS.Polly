import React from 'react';

const SpeechToTextAudioResponse = () => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = "Hello World"

    useEffect(() => {
      window.speechSynthesis.speak(msg)
    }, [msg])
    
  return (
    <div style={{ border: "1px solid darkgrey", textAlign: "center" }}>
      <audio controls autoPlay>
        <source src="your-audio-file-url.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SpeechToTextAudioResponse;