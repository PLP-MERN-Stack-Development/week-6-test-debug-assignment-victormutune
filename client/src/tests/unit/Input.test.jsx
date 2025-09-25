import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';

describe('Input component', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type here" value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} placeholder="Type here" />);
    fireEvent.change(screen.getByPlaceholderText('Type here'), { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
