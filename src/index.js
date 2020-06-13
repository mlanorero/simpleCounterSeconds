import './index.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="text-center mt-5">
        <div className="container d-flex justify-content-between">
            <p className="h1 m-2 text-light">
                <i className="far fa-clock" />
            </p>
            <p id="time" className="h1 mr-2 text-light">
                {seconds}
            </p>
        </div>
 </div>
    );
  };
  
ReactDOM.render(<SecondsCounter />, document.querySelector('#root'));

  
