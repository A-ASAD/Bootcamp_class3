import React from 'react';
import MediaCard from './MediaCard';
import Gate from './Gate';

function App({name, imgName, body, imageUrl, isOpen}) {
  return(
    <div style={{"text-align":"center", "backgroundColor": "aqua", "borderRadius":10}}>
      <p>Hello <b>{name}</b></p>
      <h1>This a simple react app.</h1>
      <MediaCard name = {imgName} body = {body} imageUrl = {imageUrl}></MediaCard>
      <Gate isOpen = {isOpen}></Gate>
    </div>
  );
}

export default App;
