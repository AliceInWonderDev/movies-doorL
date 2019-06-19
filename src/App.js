import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Error from './Components/Error';
import Movies from './Components/Movies';
import Axios from 'axios';


function App() {

const [searchInp, setSearchInp] = useState('');
const [error, setError] = useState(false);
const [resCode, setResCode] = useState('')
const [result, setResult] = useState([]);
const localStorageKey = 'doorList.data';

function url(name){
  return `http://www.omdbapi.com/?t=${name}&apikey=14ec011b`
  
}

function getDataApi(name){

  try{
    Axios.get(url(name))
      .then(function(res){
      // console.log('This is a GET: ' + JSON.stringify(result));
      
      if(res.status === 200){
        setResult([
          ...result,
          res.data
        ])
      }else if (res.status === 200 && res.data.Response === false){
        // setError({
        //   ...error,
        //   error: true
        // })
        
        setResCode(
          '404'
        )
        console.log(setResCode)
      }
      // if(!res.Response){
      //   setError({
      //     ...error,
      //     error: true
      //   })
        
      //   setResCode(
      //     '404'
      //   )
      //   return
      // }    
      console.log(res)

      // console.log("before to save: "+JSON.stringify(result))
      // window.localStorage.setItem(localStorageKey , JSON.stringify(result))
      })
      .catch(function (error) {
        console.log('This is a Catch: ' + error);
      })
}catch(error){
      console.error(`This is a error: ' + ${error.code}`);
}
}


useEffect(()=>{
  // window.localStorage.removeItem(localStorageKey)
  if(result.length > 0 ){
    window.localStorage.setItem(localStorageKey , JSON.stringify(result))
  }else{
    const localStorageData = window.localStorage.getItem(localStorageKey)
    if(localStorageData !== null){
        let parseData = JSON.parse(localStorageData)
        console.log(parseData)
        // setResult({
        //   ...result,
        //   parseData
        // })
    }
  }
})



const dataConsulta = data => {
  
  // Validar que pongan nombre de película
  if(data.searchInp === '') {
    setError(true);
    setResCode('200');
    return;
  }else{
    setSearchInp( data.searchInp );
    setError(false);
    getDataApi(data.searchInp)
  }
}


// Cargar un componente Condicionalmente
let componente;
  if(error) {
    // Hay un error, mostrarlo
    console.log(resCode)
    if(resCode === '404'){
      componente = <Error mensaje="La película no está disponible" />
    }else if(resCode === '200'){
      componente = <Error mensaje='Es obligatorio poner el nombre de una película' />
    }
  }else {
    // Mostrar el Clima
    componente = <Movies 
                  resultArray={result}
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
