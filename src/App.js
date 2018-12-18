import React, { Component } from 'react';
import './resources/styles.css';

import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';

import Featured from './components/featured';
import VenueInfo from './components/venueInfo'

import Highlights from './components/HighLights'

import Pricing from './components/pricing';

import Location from './components/location';

import Footer from './components/header_footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1350px",background:'#2f2f2f'}}>
        <Header/>

        <Element name="Featured">
        <Featured/>
        </Element>
        

        <Element name="Venue Info">
        <VenueInfo/>
        </Element>
        

        <Element name="highlight">
           <Highlights/>
        </Element>
        
        <Element name="pricing">
        <Pricing/>

        </Element>
        

        <Element name="Location">
        <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
