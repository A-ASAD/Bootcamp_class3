import React from 'react';

function MediaCard({title, body, imageUrl}) {
  return(
    <div style={{"margin":"auto","borderRadius":10, "backgroundColor":"chocolate", "width":"fit-content"}}>
      <h1>Media Card</h1>
      <h2>{title}</h2>
      <p>{body}</p>
      <br/>
      <img src = {imageUrl} width="500px" style = {{"borderRadius":10}}/>
    </div>
  );
}

export default MediaCard;
