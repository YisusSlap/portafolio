import "./AboutMe.css"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton } from "@mui/material"


const AboutMe=()=>{
    return (
        <>
        
        <div className="aboutme">
            <img id="foto" src="/FotoCircular.png" alt="logo" />
            <div className="info">
                <h1><span id="nombre">Yo soy Jesus</span></h1>
                <h2>Programador Fullstack.</h2>
                <p>
                    Mis estudios como programador iniciaron en la universidad, pero he seguido aprendiendo y mejorando de manera 
                    autodidacta leyendo documentación y tomando diversos cursos en línea.
                </p>
                <p>
                    Ademas de la programacion me gustan las mascotas exoticas, la musica y pintar.
                </p>
                <p><span>Correo:</span> jesus.riverarm@icloud.com</p>
                
                <div className="social-links">
                    <IconButton href="https://github.com/YisusSlap" aria-label="github" className="social-logo" color="secondary" >
                        <GitHub fontSize="large"/>
                    </IconButton>
                    <IconButton aria-label="github" className="social-logo" color="secondary">
                        <LinkedIn fontSize="large"></LinkedIn>
                    </IconButton>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default AboutMe