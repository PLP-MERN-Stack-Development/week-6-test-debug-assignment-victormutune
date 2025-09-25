import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../../components/Form';

describe('Form component', () => {
  it('calls onSubmit when submitted', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(<Form onSubmit={handleSubmit}><button type="submit">Submit</button></Form>);
    fireEvent.submit(screen.getByTestId('custom-form'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
