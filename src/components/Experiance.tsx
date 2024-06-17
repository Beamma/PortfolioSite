import { Box, SxProps, Theme, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";

const experienceStyle: SxProps<Theme> = {
    position: 'relative',
    padding: '50px',
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        border: '4px solid black',
    },
    '&::before': {
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRight: 'none',
        borderBottom: 'none',
    },
    '&::after': {
        bottom: 0,
        right: 0,
        width: '20px',
        height: '20px',
        borderLeft: 'none',
        borderTop: 'none',
    },
};

const experianceStyleOutter: React.CSSProperties = {
    color: 'black',
    backgroundColor: 'white',
    margin: '0px',
    padding: '50px',
}

const Experiance = () => {
    return (
        <div id="experiance" style={experianceStyleOutter}>
            <Box sx={experienceStyle}>
                <Typography variant="h3" sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    marginBottom: '20px'
                }}>
                    Experience
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={0} sm={0} md={0} lg={4}>
                    </ Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography variant="h4" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textAlign: 'right',
                            color: '#08bee5'
                        }}>
                            Tait Communications
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            textAlign: 'right',
                            color: '#08bee5'
                        }}>
                            Junior Software Engineer
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            marginBottom: '20px',
                            textAlign: 'right'
                        }}>
                            Tait Communications, founded in 1969 and headquartered in Christchurch,
                            New Zealand, is a global leader in critical communications solutions.
                            The company specializes in designing, delivering, and managing radio communication 
                            systems for industries such as public safety, utilities, transport, and emergency response.
                            Tait's product range includes LMR, LTE, satellite, and Wi-Fi integrated solutions,
                            with a strong focus on innovation and customer-centric services.
                            <br></br>
                            <br></br>
                            In the summer of 2023/2024, I worked at Tait Communication as a 
                            Junior Software Engineer. I worked to develop an API for the company. 
                            I gained a strong understanding of RESTful APIs, C++, HTTP, Python 
                            and much more. The experience proved invaluable and was 
                            monumental in developing me as a software developer.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography variant="h4" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            textAlign: 'left',
                            color: '#c47c0d'
                        }}>
                            Americold
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            textAlign: 'left',
                            color: '#c47c0d'
                        }}>
                            Store Person
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            marginBottom: '20px',
                            textAlign: 'left'
                        }}>
                            Americold is a global leader in temperature-controlled logistics, specializing in the
                            ownership, operation, acquisition, and development of temperature-controlled warehouses.
                            The company operates 245 facilities worldwide, offering approximately 1.5 billion cubic feet of
                            refrigerated storage across North America, Europe, Asia-Pacific, and South America. Founded in 1903
                            and headquartered in Atlanta, Georgia, Americold plays a critical role in the supply chain by connecting
                            food producers, processors, distributors, and retailers to consumers.
                            <br></br>
                            <br></br>
                            I work part-time 
                            on a 30 hour a week, night shift roster while still focusing on academic 
                            pursuits at university. Throughout my time at Americold I have moved 
                            through many roles. I primarily work as a forklift operator. However, 
                            on occasion I am entrusted with the running and supervision of the 
                            night shift. Throughout my tenure at Americold, I have accomplished 
                            great success. Most notably, 2022 Employee of the year, and 2022 
                            Global Action award
                        </Typography>
                    </Grid>
                    <Grid item xs={0} sm={0} md={0} lg={4}>
                    </ Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default Experiance;