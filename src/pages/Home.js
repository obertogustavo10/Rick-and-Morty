import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import History from '../components/History';
import Animation from '../components/Animation';


export default function Home() {
  return (
    <>
        <Navbar/>
        <Carousel/>
        <History/>
        <Animation/>
    </>
  )
}
