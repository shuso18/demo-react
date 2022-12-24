import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var greet = "Good Afternoon";

const dabba = {
  width:"800px",
  height:"80px",
  margin:"auto",
  backgroundColor:"aliceblue",
  textAlign:"center",
  marginTop:"340px",
  borderRadius:"20px"
}

const rabba = {
  fontWeight:"Bold",
  color:"red",
  paddingTop:"13.5px",
  fontSize:"45px"
}

const dhabba = {
  
}

const dt = new Date().getHours();


if(dt >= 12 && dt < 19){
  greet = "Good Afternoon";
  dhabba.color = "orange";
}
else if( dt >=19){
  greet = "Good Night";
  dhabba.color = "black";
  
}
else{
  greet = "Good Morning";
  dhabba.color = "green"
}

ReactDOM.render(
  <>
    <div style= {dabba}>
        <h1 style={rabba}>Hello Shubham, <span style={dhabba}>{greet}</span> </h1>
    </div>
  </>,


  document.getElementById("root")
);
