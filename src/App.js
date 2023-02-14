import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




//https://gateway.marvel.com:443/v1/public/characters?apikey=

//key publica: 01de9bf476b6570e6e3c98c1b7c803c1

//key privada: e77b26d3882fcef5ad4378692bd6485f0c686499

//key ori: 1

//key def: 60da6a73ce01067aed9430577688be5f

//developer.marvel.com


function App() {


  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=01de9bf476b6570e6e3c98c1b7c803c1&hash=60da6a73ce01067aed9430577688be5f').then(res => {

      setPersonajes(res.data.data.results)

    }).catch(Error => console.log(Error))

  }, [])

  console.log(personajes)


  return (
    <div className="App">

<div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Marvel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" to="/">Usuarios</a>
                        <a className="nav-link" href="#">comics</a>
                        <a className="nav-link" href="#">Peliculas</a>
          
                    </div>
                </div>
            </div>
        </nav></div>
        <br></br>
        <hr></hr>



      <h1>Consumiendo La Api De Marvel</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        { personajes.map(per => (

          <div className="col" key={per.id}>
            <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{width: "100%", height: "95%"}} />
              <div className="card-body">
                <p className="card-text">{per.title}</p>
              </div>
            </div>
          </div>


        ))

        

        }

      </div>
    </div>


  );



}


export default App;
