import React,{ useEffect, useState } from 'react';
import axios from 'axios';


export default function Api() {
    
    /// opcion 1

    const [ pokemon, setPokemon ] = useState([]);
    
    const obtenerDatos = async () =>{
        const data = await fetch('https://pokeapi.co/api/v2/item-category/1/');
        const poke = await data.json();
        setPokemon(poke.items);

      }


      // opcion 2

      const [personajes, setPersonajes] = useState([]);
      const url = "https://rickandmortyapi.com/api/character";

      const fetchCharacters = (url) =>{
          fetch(url)
          .then(response => response.json())
          .then( data => setPersonajes(data.results))
          .catch(error => console.log(error))
      }

      // opcion 3
      const [soldados, setSoldados] = useState([]);
      const axiosStartWards = () =>{
          axios.get('https://swapi.py4e.com/api/people/')
          .then(response => setSoldados(response.data.results))
          .catch(error => console.log(error))
      }

    // opcion 4
const [people, setPeople] = useState([]);
    const axiosFUn = async() =>{
 try{ 
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setPeople(response.data)
}catch(error){
    console.log(error);
}
    }





    useEffect(() => {
        fetchCharacters(url);
        obtenerDatos();
        axiosStartWards();
        axiosFUn();


    }, []);




  return <div>
      <h2>Opcion 1</h2>
      <ul>

          {
              pokemon.map(item => (
                  <li >{item.name}</li>
              ))
          }
      </ul>
      <h2>Opcion 2</h2>
      <br></br>
      <ul>

          {
              personajes.map(item => (
                  <li >{item.name}</li>
              ))
          }
      </ul>
      <h2>Opcion 3</h2>
      <br></br>
      <ul>

          {
              soldados.map(item => (
                  <li >{item.name}</li>
              ))
          }
      </ul>
      <h2>Opcion 4</h2>
      <br></br>
      <ul>

          {
              people.map(item => (
                  <li >{item.name}</li>
              ))
          }
      </ul>
      
      


  </div>;
}







import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Home from './components/Home';
import Container from '@material-ui/core/Container';
import './App.css';


function App() {
  
  ////State variables
const [characters, setCharacters] = useState([]);
const [info, setInfo] = useState({});

const initialUrl = 'https://rickandmortyapi.com/api/character';
 
  //Call API
  const apiCharacter = (url) =>{
      axios.get(url)
      .then(response => {
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch(error => console.log(error))
   
       }
        
   

const onPrevious = () =>{
  apiCharacter(info.prev);
 }
const onNext = () =>{
  apiCharacter(info.next);
}

 useEffect(() => {
apiCharacter(initialUrl);

 }, []);

 
  return (
    
    <Container maxWidth="lg">
  <Home/>
    <Navbar/>
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
  <Cards className='cards' characters={characters}/>
    
    </Container>
 
  );
  }

export default App;
