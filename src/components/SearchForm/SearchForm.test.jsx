import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
    test('renders an input with the value equal to initial value passed in props', () => {
        const defaultValue = 'Initial Search Text';
        render(<SearchForm defaultValue={defaultValue} />);
        
        const inputElement = screen.getByPlaceholderText(/what do you want to search/i);
        
        expect(inputElement).toHaveValue(defaultValue);
    });

    test('calls "onSearch" prop with proper value after typing and clicking the Submit button', () => {
        const text = 'New Search Value';
        const mockOnSearch = jest.fn();
        render(<SearchForm defaultValue="Initial" onSearch={mockOnSearch} />);
        
        const inputElement = screen.getByPlaceholderText(/what do you want to search/i);
        const buttonElement = screen.getByText(/search/i);
        
        fireEvent.change(inputElement, { target: { value: text } });
        expect(inputElement).toHaveValue(text);
        
        fireEvent.click(buttonElement);
        expect(mockOnSearch).toHaveBeenCalledWith(text);
    });

    test('calls "onSearch" prop with proper value after typing and pressing Enter key', () => {
        const text = 'Enter Key Search';
        const mockOnSearch = jest.fn();
        render(<SearchForm defaultValue="Initial" onSearch={mockOnSearch} />);
        
        const inputElement = screen.getByPlaceholderText(/what do you want to search/i);
        
        fireEvent.change(inputElement, { target: { value: text } });
        expect(inputElement).toHaveValue(text);
        
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
        expect(mockOnSearch).toHaveBeenCalledWith(text);
    });
});