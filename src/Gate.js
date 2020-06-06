import React from 'react';

function Gate({isOpen}) {
  return(
    <div style={{"margin":"auto","borderRadius":10, "backgroundColor":"red","width":"fit-content", "padding":"0px 20px 0px 20px"}}>
        <h3>Gate:<br/>{isOpen? "Open" : "Closed"}</h3>
    </div>
  );
}

export default Gate;
