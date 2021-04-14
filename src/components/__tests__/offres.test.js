import {render, screen, cleanup } from '@testing-library/react'
import Offres from '../Offres';


test ('devrait renderiser le component',() =>{
    render(<Offres/>);
    const offresElement = screen.getByTestId('Offres-1');
    expect(offresElement).toBeInTheDocument("Tu es à la recherche de ton stage de fin d'études?");
    expect(offresElement).toContainHTML('<Card>')
})