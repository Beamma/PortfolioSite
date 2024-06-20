import React from "react";
import {Container, Typography} from '@mui/material';

const backgroundStyle = {
    height: '100vh',
    color: 'black',
    background: 'white',
    width: "100%"
};

const SiteNotHosted = () => {

    return (
        <div id="siteNotHosted" style={backgroundStyle}>           
            <Container sx={{
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h3" component="h3" sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'black',
                    textDecoration: 'none'
                }} gutterBottom>
                    Sorry this site is not currently being hosted
                </Typography>       
            </Container>
        </div>
    )
}

export default SiteNotHosted;