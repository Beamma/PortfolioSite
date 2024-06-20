import { Grid, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel.tsx";

const projectStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'black',
    margin: '0px',
    padding: '50px'
};

const Projects = () => {

    return (
        <div id="projects" style={projectStyle}>
            <Typography variant="h3" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                paddingBottom: '50px'
            }}>
                Projects
            </Typography>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Carousel /> 
                </ Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant="body1" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        background: 'white',
                        color: "black",
                        borderRadius: "5px",
                        padding: '20px',
                        minHeight: 635
                    }}>
                        Over the years, I have dedicated my spare time to working on a variety of software development projects that span 
                        across different domains and technologies. These projects have provided me with valuable hands-on experience and have 
                        helped me to continuously improve my coding skills, problem-solving abilities, and understanding of software engineering principles.
                        <br></br>
                        <br></br>
                        My projects range from building web and mobile applications to developing tools and platforms that address 
                        specific needs or challenges. Each project has been an opportunity to learn new programming languages, frameworks, 
                        and tools, as well as to implement best practices in software design and development.
                        Through these projects, I have gained experience in areas such as user interface design, back-end development, database management, 
                        API integration, and data visualization. Additionally, I have worked on projects that involve real-time data processing, secure authentication, 
                        and performance optimization.
                        <br></br>
                        <br></br>
                        Working on these projects has also enhanced my ability to manage the entire software development lifecycle, from initial 
                        concept and design to implementation, testing, and deployment. I take pride in delivering functional and user-friendly solutions 
                        that meet the intended objectives.
                    </Typography>
                </ Grid>
            </Grid>
        </div>
    )
}

export default Projects;