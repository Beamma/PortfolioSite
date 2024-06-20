import { Grid, Typography } from "@mui/material";
import React from "react";
import SkillsBubbles from './SkillBubbles.png';

const skillStyle: React.CSSProperties = {
    color: 'white',
    backgroundColor: 'black',
    margin: '0px',
    padding: '50px',
    paddingBottom: 0
};

const Skills = () => {
    return (
        <div id="skills" style={skillStyle}>
            <Typography variant="h3" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                paddingBottom: '20px',
            }}>
                Skills<hr></hr>
            </Typography>
            <Grid container spacing={8} sx={{marginBottom: '40px'}}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <img src={SkillsBubbles} alt="Skill bubbles" style={{width: "70%"}}/>
                </ Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant="body1" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        textAlign: 'left'
                    }}>
                        Over the years of my education and professional experience, I have gained a large variety of skills. The skills you see
                        inside the bubbles are the most important of which. The size does not represent, my efficiency in the matter, but rather
                        a combination of the importance to me and how much I use the given skill.
                        <br></br>
                        <br></br>
                        When it comes to languages, I'm most comfortable in Python, having had many years experience. Java, TypeScript, and JavaScript come next;
                        have been my main languages over the past year. I also have years of experience in HTML/CSS and SQL. I have industry experience, with
                        working in C++, having done my summer internship project in this language. Lastly is C, where I have prior experience stemming from on
                        of my second year university courses.
                        <br></br>
                        <br></br>
                        You'll notice a variety of web development frameworks scattered throughout the graph. I have used all these frameworks in a variety of situations,
                        from university projects to personal projects. Recently, I have been doing a lot of web development, and thus have gained a lot of experience in these 
                        frameworks recently.
                        <br></br>
                        <br></br>
                        Lastly there are some miscellaneous skills up there. AI, is a rather general statement here, I have experience in developing Big Data projects, machine learning
                        and neural networks. In my internship I worked on a linux embedded system, and although at the time this was new to me, over that summer I gained a 
                        strong understanding of how these systems work. Git has been used all throughout my software experiences, and I am very confident in this skill. Finally 
                        I have a strong understanding of software engineering methodologies, mainly scrum. Having completed a full year project using the scrum methodology, I feel
                        confident in the matter.
                    </Typography>
                </ Grid>
            </ Grid>
            <hr></hr>
        </div>
    )
}

export default Skills;