import React from 'react';
import './App.css'
import Nav from './component/Nav';
import Hero from './component/Hero';
import Card from './component/Card';

 function App()
 {
   return(
       <>
      <Nav/>
      <Hero/>
      <Card
      Button="SOLD OUT"
      Image="/image/Katie.png"
      About="LIFE lessons with Katie"
      Rate="5.0 (6) .USA"
      Price="$154 for One"

      />
      <Card
            Button="FEW LEFT"

      Image="/image/Wedding.png"
      About="Learn Wedding photography "
      Rate="5.0 (30) .USA"
      Price="$15 for Trial "

      />
      <Card
      Button="SOLD OUT"
      Image="/image/mountain.png"
      About="Group mountain biking"
      Rate="4.8(6) .USA"
      Price="$135 for One"
      />
      </> 

      )
   }

export default App;
