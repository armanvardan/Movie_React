import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders initial value provided in props', () => {
        
        const defaultValue = '5';
        render(<Counter defaultValue={defaultValue} />);
        
        const valueElement = screen.getByText(/value: 5/i);
        expect(valueElement).toBeInTheDocument();
    });

    test('clicking "decrement" button decreases the displayed value', () => {
        const defaultValue = '5';
        render(<Counter defaultValue={defaultValue} />);
        
        const decrementButton = screen.getByText(/decrement/i);
        fireEvent.click(decrementButton);
        
        const valueElement = screen.getByText(/value: 4/i);
        expect(valueElement).toBeInTheDocument();
    });

    test('clicking "increment" button increases the displayed value', () => {
        const defaultValue = '5';
        render(<Counter defaultValue={defaultValue} />);
        
        const incrementButton = screen.getByText(/increment/i);
        fireEvent.click(incrementButton);
        
        const valueElement = screen.getByText(/value: 6/i);
        expect(valueElement).toBeInTheDocument();
    });
});