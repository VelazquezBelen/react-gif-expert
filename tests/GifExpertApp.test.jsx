import { render, screen, fireEvent} from "@testing-library/react";
import { GifExpertApp } from "../src/GIFExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 
    
    test('debe de mostrar las categorias buscadas', () => {
        render( <GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: 'The Office'} });
        fireEvent.submit( form );

        expect( screen.getByText('The Office') );
    });
});