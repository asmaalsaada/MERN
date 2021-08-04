import './App.css';
import io from 'socket.io-client';
import React,{useEffect,useState} from 'react';

function App() {
  const [socket] = useState(() => io(':8000'));
  const [text,setText] = useState("")
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on("Welcome opopo ", data => setText(data.data));  
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, [socket]);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Socket Test</h1>
      <h2>{text}</h2>
      </header>
    </div>
  );
}

export default App;
