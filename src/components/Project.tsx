import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';


interface ProjectCardProps {
    name: string;
    link: string;
    description: string;
    image: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({name, link, description, image}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    const height = isSmallScreen ? 600 : isMediumScreen ? 400 : 375;

    const linkToPetition = () => {
        if (name === "Gardeners Grove") {
            window.location.href = link;
        } else {
            navigate(`${link}`)
        }
    }

    return (
        <div>
            <Card sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 500 }}>
                <CardActionArea onClick={linkToPetition}>
                    <Box sx={{ flexGrow: 1 }}>
                        {image && (
                            <CardMedia
                            component="img"
                            height="250"
                            image={image}
                            alt={`${image}`}
                            />
                        )}
                        <CardContent sx={{ paddingBottom: '0 !important' }}>
                            <Typography variant="h5" component="div" sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                            }}>
                                {name}
                            </Typography>
                            <Typography variant="body1" sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                background: 'white',
                                color: "black",
                                height: height
                            }}>
                                {description}
                            </Typography>
                        </CardContent>
                    </ Box>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default ProjectCard;