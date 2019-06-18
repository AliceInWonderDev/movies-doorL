import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Error from './Components/Error';
import Movies from './Components/Movies';
// import Axios from 'axios';
// import { async } from 'q';
// const axios = require('axios')

function App() {
const [searchInp, setSearchInp] = useState('');
const [error, setError] = useState(false);
const [result, setResult] = useState({});

useEffect(()=>{
  if(searchInp === '')return;

  const getApi = async () =>{
  
    const movies = ["0100669", "3896198", "0373889", "0417741", "0926084", "1201607", "3183660", "4123430"];
    for(let i=0; i < movies.length; i++){
      // let name = searchInp.value
      let url = `http://www.omdbapi.com/?i=tt${movies[i]}&apikey=14ec011b`;
      // let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=14ec011b';
      const resp = await fetch(url);
      const result = await resp.json();
      console.log(movies[i])
      setResult(result)
      console.log(url)
    }
    
  }  
  getApi(); 
}, [searchInp])

const dataConsulta = data => {
  // Validar que ambos campos estén
  if(data.searchInp === '') {
    setError(true);
    return;
  }

  // Ciudad y pais existen, agregarlos al state
  setSearchInp(data.searchInp);
  setError(false);
}


// Cargar un componente Condicionalmente
let componente;
  if(error) {
    // Hay un error, mostrarlo
    componente = <Error mensaje='Es obligatorio poner el nombre de una película' />
  } else if (result.cod === "404") {
    componente = <Error mensaje="La película no está disponible" />
  } else {
    // Mostrar el Clima
    componente = <Movies 
                  result={result}
                />;
  }

  return (
    <div>
        <Header
          title= 'Find your Movie' 
        />           
        <div className="container-form">
          <div className="container">
            <div className="row">
              <Search
              dataConsulta={dataConsulta}
              />
            </div>
            <div className="row"> 
              <div className="col s12 m6">
                {componente}
              </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
