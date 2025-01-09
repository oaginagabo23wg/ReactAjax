import Header from './Header.js';
import './App.css';
import Main from './Main.js';
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);


  const handleRadioChange = async (value) => {
    const letra = value[0];
    fetch('/espacios-naturales.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        const filtrados = data.item.filter((item) =>
          item.territory?.startsWith(letra)
        );
        setFilteredData(filtrados); 
      })
      .catch((error) => console.error('Error:', error));

  }
  console.log(data);
  
  return (
    <div className="App">
      <Header />
      <Main onRadioChange={handleRadioChange} filteredData={filteredData} />
    </div>
  );
}

export default App;
