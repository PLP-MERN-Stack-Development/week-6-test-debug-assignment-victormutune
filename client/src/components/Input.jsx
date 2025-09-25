import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    data-testid="custom-input"
    {...props}
  />
);

export default Input;
