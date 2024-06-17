import React from "react";
import {Container, Typography} from '@mui/material';
import NavBar from "./NavBar.tsx";
import About from "./About.tsx";
import Experiance from "./Experiance.tsx"

const backgroundStyle = {
    height: '100vh',
    color: 'yellow',
    background: 'white',
    backgroundImage: `
      linear-gradient(grey 1px, transparent 1px),
      linear-gradient(to right, grey 1px, transparent 1px)
    `,
    margin: '0px',
    backgroundSize: '40px 40px',
};


const Home = () => {

    return (
        <div style={backgroundStyle}>
            <NavBar></NavBar>            
            <Container sx={{
                padding: "10%",
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h1" component="h3" sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textShadow: '8px 8px 2px black, 4px 4px 2px black, 12px 12px 2px black',
                    width: '100%'
                }} gutterBottom>
                    Joel Bremner
                </Typography>       
                {/* <Typography variant="h4" component="h3" sx={{ 
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textShadow: '4px 4px 2px black',
                    width: '100%'
                    }} gutterBottom>
                    Graduate Computer Scientist
                </Typography> */}
            </Container>
            <About />
            <Experiance />
        </div>
    )
}

export default Home;