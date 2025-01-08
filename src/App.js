import Header from './Header.js';
import './App.css';
import Main from './Main.js';
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const handleRadioChange = async (value) => {
    console.log(value);
    try {
      const response = await fetch('./espacios.php');
      const text = await response.text();
      try {
        const result = JSON.parse(text);
        setData(result);
      } catch {
        console.error("Json erantzuna ez da egokia: ", text);
      }
    }
    catch (error) {
      console.error('Zerbitzariari eskaeran errorea: ', error);
    }
  }
  console.log(data);

  return (
    <div className="App">
      <Header />
      <Main onRadioChange={handleRadioChange}/>
    </div>
  );
}

export default App;
