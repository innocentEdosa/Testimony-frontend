import React from 'react';
import './backdrop.css';

const Backdrop = ({ style, children }) => {
  return (
    <div style={{...style}} className="backdrop">
      {children}
    </div>
  );
}


export default Backdrop;