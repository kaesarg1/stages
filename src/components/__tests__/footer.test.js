import {render, screen, cleanup } from '@testing-library/react'
import Footer from '../Footer';

test ('devrait renderiser Footer component',() =>{
    render(<Footer/>);
    const footerElement = screen.getByTestId('Footer-1');
    expect(footerElement).toContainHTML('<Link>')

})
