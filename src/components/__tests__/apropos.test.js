import {render, screen, cleanup } from '@testing-library/react'
import Apropos from '../Apropos';


test ('devrait renderiser text specifié dans le component',() =>{
    render(<Apropos/>);
    const aproposElement = screen.getByTestId('Apropos-1');
    expect(aproposElement).toHaveTextContent('À propos');
})