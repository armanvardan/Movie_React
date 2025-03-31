import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect Component', () => {
    const genres = ['Action', 'Drama', 'Comedy', 'Horror'];

    test('renders all genres passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre="" onClick={() => {}} />);

        genres.forEach((genre) => {
            const genreButton = screen.getByText(genre);
            expect(genreButton).toBeInTheDocument();
        });
    });

    test('highlights the selected genre passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre="Action" onClick={() => {}} />);

        const selectedButton = screen.getByText('Action');
        expect(selectedButton).toHaveClass('selected');

        genres
            .filter((genre) => genre !== 'Action')
            .forEach((genre) => {
                const genreButton = screen.getByText(genre);
                expect(genreButton).not.toHaveClass('selected');
            });
    });

    test('calls "onClick" callback with correct genre when a genre button is clicked', () => {
        const mockOnClick = jest.fn();

        render(<GenreSelect genres={genres} selectedGenre="" onClick={mockOnClick} />);
        
        const comedyButton = screen.getByText('Comedy');
        fireEvent.click(comedyButton);

        expect(mockOnClick).toHaveBeenCalledWith('Comedy');

        const horrorButton = screen.getByText('Horror');
        fireEvent.click(horrorButton);

        expect(mockOnClick).toHaveBeenCalledWith('Horror');

        expect(mockOnClick).toHaveBeenCalledTimes(2);
    });
});