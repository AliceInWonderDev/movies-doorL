import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Error from './Components/Error';
import Movies from './Components/Movies';

 import Axios from 'axios';
// import { async } from 'q';
// const axios = require('axios')

function App() {
const [searchInp, setSearchInp] = useState('');
const [error, setError] = useState(false);
const [result, setResult] = useState({});

function url(name){
  return `http://www.omdbapi.com/?t=${name}&apikey=14ec011b`
}

useEffect(()=>{
  if(searchInp === ''){
    return;
  }else if (searchInp !== ''){
    let name = searchInp;
    console.log(name)
  }
  


  const getApi = async (searchInp) =>{
  if(searchInp !== ''){
    console.log(url())
  }
try{
      Axios.get(url())
        .then(function(res){
          console.log('This is a GET: ' + JSON.stringify(res));
          
        })
        .catch(function (error) {
          console.log('This is a Catch: ' + error);
        })
      }catch(error){
        console.error(`This is a error: ' + ${error.code}`);
        }

      setResult(result)
      
    // }
    
  }  
  getApi(); 
})

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
