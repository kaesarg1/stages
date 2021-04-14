import {render, screen, cleanup } from '@testing-library/react'
import Menu from '../Menu';


test ('devrait renderiser Menu component',() =>{
    render(<Menu/>);
    const menuElement = screen.getByTestId('Menu-1');
    expect(menuElement).toBeInTheDocument('Trouvez votre stage');
})

