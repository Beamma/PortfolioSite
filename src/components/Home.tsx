import React from "react";
import {Container, Typography} from '@mui/material';

const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    color: 'white', // Adjust text color for better visibility
    background: 'linear-gradient(to top right, #ff3659, black)',
    margin: '0px'
};


const Home = () => {

    return (
        <div style={backgroundStyle}>
            <Container sx={{
                padding: "20%"
            }}>
                <Typography variant="h2" component="h3" gutterBottom>
                    Joel Bremner
                </Typography>
                <Typography variant="h4" component="h3" gutterBottom>
                    Graduate Computer Scientist
                </Typography>
            </Container>
        </div>
    )
}

export default Home;