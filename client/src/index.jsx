import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/image.jsx";
class First extends Component {
   constructor(props){
       super(props)
   }
   render(){
       return (
           <div>
               <App />
           </div>
       )
   }
};
ReactDOM.render(<First></First>,document.getElementById("app"));