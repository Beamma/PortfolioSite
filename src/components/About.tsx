import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import JoelBremnerProfile from './JoelBremnerProfile.jpeg';

const aboutStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'black',
    margin: '0px',
    padding: '50px',
    textAlign: 'left'
};

const About = () => {
    return (
        <div id="about-me" style={aboutStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h3" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                    }}>
                        About Me
                    </Typography>
                </ Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Typography variant="body1" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        marginBottom: "20px"
                    }}>
                        Hi i'm Joel, a keen software devloper currently studying at the University of Canterbury. I plan to graduate at the end of this year (2024) with a
                        Bachelor of Science, majoring in Computer Science. Although I haven't ruled out the option of enrolling in a Master of Artificial Intelligence for next year.
                        I have an extremely strong passion towards software development and technology. Throughout highschool, university, internships,
                        and personal projects I have gained a strong and thorough understanding of software development, and software engineering methodologies.
                        I hope to apply these skills in a proffesional environment, that fosters innovation and personal development. Although I currently reside in Christchurch
                        New Zealand, I am open to relocated for the right position.
                    <br></br>
                    <br></br>
                        Outside of academic interests, I have many other hobbies. Some of these hobbies include; rugby, where I am a passionate and commited member of my local rugby
                        club. Aside from playing in the clubs top grade team, I also volunteer my time in varying roles towards the clubs greater interests. I am also an avid skiier;
                        having held a seasons pass to Mt Hutt for the past 7 years. Come summer I'm a hobbiest golfer, as a member at Mcleans Island golf club. The last of my hobbies
                        include touch rugby, mountain biking, camping, tramping and anything outdoors.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} sx={{textAlign: "center", marginBottom: "20px"}}>
                    <img src={JoelBremnerProfile} alt="Local" style={{width: "70%", borderRadius: '50%',}}/>
                </ Grid>
            </Grid>
        </div>
    )
}

export default About;