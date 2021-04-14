import {render, screen, cleanup } from '@testing-library/react'
import Partenaires from '../Partenaires';


test ("devrait renderiser l'element specifié dans le component",() =>{
    render(<Partenaires/>);
    const PartenairesElement = screen.getByTestId('Partenaires-1');
    expect(PartenairesElement).toHaveTextContent('Partenaires');
})