import React, { useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(props.defaultValue);

    const handleChange = (change) => {
        setCounter((prevCounter) => prevCounter + change);
    }
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
             { onClick: () => handleChange(1) },
            'Increment'
        ),
        React.createElement(
            'p',
            null,
            `Value: ${counter}`
        ),
        React.createElement(
            'button',
             { onClick: () => handleChange(-1) },
            'Decrement'
        ),
    )
}

export default Counter;