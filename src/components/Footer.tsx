import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                bottom: 0
            }}
        >
            <Link href="https://github.com/Beamma" target="_blank" rel="noopener" sx={{ color: 'white', margin: '0 10px' }}>
                <GitHubIcon />
            </Link>
            <Link href="https://linkedin.com/in/joel-bremner-916a84302" target="_blank" rel="noopener" sx={{ color: 'white', margin: '0 10px' }}>
                <LinkedInIcon />
            </Link>
            <Link href="mailto:jbremner.nz@gmail.com" sx={{ color: 'white', margin: '0 10px' }}>
                <EmailIcon />
            </Link>
            <Link href="tel:+64279293591" sx={{ color: 'white', margin: '0 10px' }}>
                <PhoneIcon />
            </Link>
            <Typography variant="body1" sx={{
                fontFamily: 'monospace',
                fontWeight: 500,
                marginTop: "20px"
            }}>
                <b>Email: </b>jbremner.nz@gmail.com<br></br>
                <b>Phone: </b>027 929 3591<br></br>
            </Typography>
        </Box>
    );
};

export default Footer;