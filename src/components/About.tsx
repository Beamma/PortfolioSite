import { Typography } from "@mui/material";
import React from "react";

const aboutStyle: React.CSSProperties = {
    height: '50vh',
    color: 'white', // Adjust text color for better visibility
    backgroundColor: 'black',
    margin: '0px',
    padding: '50px',
    paddingLeft: '100px',
    textAlign: 'left'
};

const About = () => {
    return (
        <div id="about-me" style={aboutStyle}>
            <Typography variant="h3" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
            }}>
                About Me
            </Typography>
        </div>
    )
}

export default About;