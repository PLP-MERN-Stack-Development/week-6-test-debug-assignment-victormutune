import React from 'react';

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} data-testid="custom-form">
    {children}
  </form>
);

export default Form;
