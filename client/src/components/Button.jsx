import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => (
  <button type={type} onClick={onClick} data-testid="custom-button">
    {children}
  </button>
);

export default Button;
