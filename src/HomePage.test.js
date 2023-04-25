import React from 'react';
import HomePage from './Components/HomePage';
import { render } from '@testing-library/react';


test('renders Home without crashing', () => {
    render(<HomePage/>);
});



