import { Grid, Typography } from "@mui/material";
import React from "react";

const educationStyle: React.CSSProperties = {
    color: 'black',
    backgroundColor: 'white',
    margin: '0px',
    padding: '50px'
};

const Education = () => {
    return (
        <div id="education" style={educationStyle}>
            <Typography variant="h3" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                paddingBottom: '50px'
            }}>
                Education
            </Typography>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant="h5" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        background: 'white',
                        color: "red",
                        borderRadius: "5px",
                        padding: '20px'
                    }}>
                        University of Canterbury<hr></hr>
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        background: 'white',
                        color: "black",
                        padding: '20px',
                        paddingTop: '0px'
                    }}>
                        <b>BSc - Major in Computer Science | 2022-2024</b><br></br>
                        I am currently in my third year of study at UC, where I am studying 
                        towards a BSc majoring in Computer Science. I will be completing my 
                        degree at the end of 2024. I have gained vast amounts of knowledge
                        and experience, that will help to contribute meaningfully in a
                        proffesional environment.
                    </Typography>
                </ Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant="h5" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        background: 'white',
                        color: "green",
                        borderRadius: "5px",
                        padding: '20px'
                    }}>
                        Burnside High School<hr></hr>
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        background: 'white',
                        color: "black",
                        padding: '20px',
                        paddingTop: '0px'
                    }}>
                        <b>NCEA | 2017-2021</b><br></br>
                        I attended Burnside High School from 2017 - 2021. This is where my love for software development began.
                        I gained many valuable skills through out my time here. My most notable achievements throughout my time at Burnside 
                        inlclude but is not limited to Excellence endorsement accross all 3 levels of NCEA. 
                    </Typography>
                </ Grid>
            </Grid>
        </div>
    )
}

export default Education;