import './index.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

const SecondsCounter = () => {
  constructor(){
    super()
    this.state = {contador : 1}
    setInterval(() => { this.setstate({this.state.contador + 1}), 1000 })
  }
}
  render(){
    return (
        <div className="text-center mt-5">
        <div className="container d-flex justify-content-between">
            <p className="h1 m-2 text-light">
                <i className="far fa-clock" />
            </p>
            <p id="time" className="h1 mr-2 text-light">
                {this.state.contador}
            </p>
        </div>
 </div>
    );
   }
  
  
ReactDOM.render(<SecondsCounter />, document.querySelector('#root'));

  
