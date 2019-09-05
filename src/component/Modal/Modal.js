import React from 'react';
import './modal.css';

const Modal = ({style, children}) => {
  return (
    <div style={{...style}} className="modal">
      {children}
    </div>
  );
}

export default Modal;
