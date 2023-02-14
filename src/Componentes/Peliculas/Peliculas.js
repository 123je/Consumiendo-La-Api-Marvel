import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Peliculas = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    axios.get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=01de9bf476b6570e6e3c98c1b7c803c1&hash=60da6a73ce01067aed9430577688be5f').then(res => {

      setPersonajes(res.data.data.results)

    }).catch(Error => console.log(Error))

  }, [])

  console.log(personajes)
  }


export default Peliculas