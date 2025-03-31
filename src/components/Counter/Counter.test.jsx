import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders initial value provided in props', () => {
        const defaultValue = 5;
        render(<Counter defaultValue={defaultValue} />);

        const valueElement = screen.getByText(/value: 5/i); 
        expect(valueElement).toBeInTheDocument();
    });

    test('clicking "Increment" button increases the counter value', () => {
        const defaultValue = 5;
        render(<Counter defaultValue={defaultValue} />);

        const incrementButton = screen.getByText(/increment/i);

        // Click the "Increment" button
        fireEvent.click(incrementButton);

        // Validate new counter value
        const valueElement = screen.getByText(/value: 6/i);
        expect(valueElement).toBeInTheDocument();
    });

    test('clicking "Decrement" button decreases the counter value', () => {
        const defaultValue = 5;
        render(<Counter defaultValue={defaultValue} />);

        const decrementButton = screen.getByText(/decrement/i);

        // Click the "Decrement" button
        fireEvent.click(decrementButton);

        // Validate new counter value
        const valueElement = screen.getByText(/value: 4/i);
        expect(valueElement).toBeInTheDocument();
    });

    test('multiple clicks update the value correctly', () => {
        const defaultValue = 5;
        render(<Counter defaultValue={defaultValue} />);

        const incrementButton = screen.getByText(/increment/i);
        const decrementButton = screen.getByText(/decrement/i);

        // Click "Increment" button twice
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);

        // Validate new counter value after increments
        const incrementedValue = screen.getByText(/value: 7/i);
        expect(incrementedValue).toBeInTheDocument();

        // Click "Decrement" button once
        fireEvent.click(decrementButton);

        // Validate new counter value after decrement
        const decrementedValue = screen.getByText(/value: 6/i);
        expect(decrementedValue).toBeInTheDocument();
    });
});