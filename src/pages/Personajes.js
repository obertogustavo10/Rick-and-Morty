import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Container from '@material-ui/core/Container';
import ParticlesBg from 'particles-bg';
import '../App.css';

export default function Personajes() {
    
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
        <Navbar/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Cards className='cards' characters={characters}/>
    </Container>
 
  );
}
