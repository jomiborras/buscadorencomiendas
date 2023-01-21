import './header.css';
import { Button } from '@mui/material';

function Header() {
    return (
        <header className="index-header">
            <h2 className="index-title2">
                Buscador de Encomiendas
            </h2>
            
            <Button className="" variant="text" type="button" color="warning">
                Registrate
                <span className=""></span>
            </Button>

            <Button className="" variant="contained" type="button" color="warning">
                Ingresar
                <span className=""></span>
            </Button>
        </header>

    );
}

export default Header;