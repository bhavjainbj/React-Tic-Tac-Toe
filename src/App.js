import { useState } from 'react';
import './App.css';
import Board from "./components/Board";
import Heading from "./components/Heading";
import NavBar from './components/NavBar';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';      
      document.title = 'Tik Tak Toe |  Dark-Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';      
      document.title = 'Tik Tak Toe |  Light-Mode';
    }
  }

  return (
    <>
      <NavBar title="TikTakToe" mode={mode} toggleMode={toggleMode} />
      <div className="playground">
        <Heading/>
        <Board mode={mode} />
      </div>
    </>
  );
}

export default App;
