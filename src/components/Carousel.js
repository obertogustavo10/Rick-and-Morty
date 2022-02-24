import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Rick from '../img/image.png';
import RickOne from '../img/image2.jpg';
import RickTwo from '../img/image3.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Carousel() {
  return (
    <AutoplaySlider
    animation="fallAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}>
      
    <div data-src={Rick} />
    <div data-src={RickOne} />
    <div data-src={RickTwo} />
  </AutoplaySlider>
  )
}
