import './Header.css'
import { Button } from '@mui/material'

const Header =()=>{

    return (
        <header>
            <nav>
                <Button id='header-button' href='http://localhost:5173' color="secondary" size="medium">Sobre mi</Button>
                <Button id='header-button' href='http://localhost:5173/proyects' color="secondary" size="medium">Proyectos</Button>
                <Button id='header-button' href='http://localhost:5173/habilidades' color="secondary" size="medium">Habilidades</Button>
                <Button id='header-button' href='http://localhost:5173' color="secondary" variant="contained" size="medium">CV</Button>
            </nav>
        </header>
        
    )
}

export default Header