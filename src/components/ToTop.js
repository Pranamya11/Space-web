import React from 'react';

const ToTop = ({ show, onClick }) => {
  return (
    <a 
      href="#" 
      className={`to-top ${show ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <i data-feather="chevron-up"></i>
    </a>
  );
};

export default ToTop; 