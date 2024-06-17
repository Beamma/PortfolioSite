import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, MobileStepper, Paper, Typography, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Project from './Project.tsx';
import GardenersImage from './gardeners_grove.jpg';
import CatalystImage from './catalyst.jpg';
import BeerPredictor from './BeerPredictor.PNG';
import ClubHub from './ClubHub.PNG';
import JoelCartoon from './JoelCartoon.PNG';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const projectSteps = [
  {
    name: 'Gardeners Grove',
    image: GardenersImage,
    link: 'Link',
    description: 'Gardeners grove is a university project currently under development. This app has been developed by myself and a team of 7 other individuals as a university project for one of my courses.\
    The project uses sprint-boot, thymeleaf, bootstrap and MariaDB. The app allows for users to create accounts, and then create gardens contianing plant information, as well as\
    add friends and browse others gardens; among a plethra of features. There isn\'t any particular part of the app that I worked on, as well follow the scrum methodology allowing for us\
    developers to work on features accross the entirety of the code base.'
  },
  {
    name: 'Catalyst Petitions',
    image: CatalystImage,
    link: 'Link',
    description: 'Catalyst Petitions, is a full stack site I developed on my own. It makes good use of JavaScript frameworks; using ExpressJs hooked upto MariaDB for the backend API,\
    and ReactJS with MUI components on the frontend. The API itself is RESTful. TypeScript was used instead of JavaScript This project taught me a bunch about JavaScript frameworks,\
    as well as general web development. The app allows for users to create acoounts, view and support petitions, as well as create and edit thier own petitions. This was my first real\
    crack at web development, so I have had a lot of take aways from this project and I learnt a lot.'
  },
  {
    name: 'Beer Predictor',
    image: BeerPredictor,
    link: 'Link',
    description: 'My Beer prediction app, is a simple UI for a more complex big data problem. This project is mainly focused around the parrallel computing required to build the model.\
    I used to dask, to allow me to distribute the work load accross multiple cores. This allows for me to be able to handle the 4 million record dataset, that this model is populated\
    with in order to ensure an accurate prediction of beer preferance for a user. The algorithm itself, consists of curating a utility matrix, and using collaborative filtering with \
    weighted similarity ratings in order to supply a beer prediction based off of a query set of beer reviews. I enjoyed this project a lot, and look to further work on more AI/big data\
    problems in the near future. I created a simple server, and front end using JavaScript Frameworks.'
  },
  {
    name: 'Club Hub',
    image: ClubHub,
    link: 'Link',
    description: 'This is my main personal project. It has started off as a advanced rugby stats recorder used by my club. The app allows for game footage to be uplaoded, then using\
    specific commands, users/team analysts are able to quickly record customized match stats which are mapped to the time they occured in the footage. This allows for players to see\
    a break down of all there stats, with the footage attatched. The users are also able to do advanced queries, on all this data, allowing them to curate a stats summary that is\
    meaningful to them. The project is built using ReactJS and ExpressJS. I have a lot of future plans for this project.'
  },
  {
    name: 'Personal Site',
    image: JoelCartoon,
    link: '',
    description: 'This is the site you are currently on. I created this site not only for potential employers, but also to allow my friends and family a space to keep up with\
    what I am currently working on, and just to get a further understanding of what it is I spend all day working on. This project was a great way for me to learn about\
    domain names, and services such as AWS. It finally has allowed me to start hosting some of my projects, and allow for me to share them with people who care. This project\
    is another ReactJS app using MUI, as the goal wasnt to learn about ReactJS, but rather creating a centralised spot, for all things related to me, while picking up a couple extra skills.'
  }
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projectSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1}}>
      <AutoPlaySwipeableViews
        axis='x'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {projectSteps.map((step, index) => (
            <Project 
                key={step.name}
                name={step.name}
                link={step.link}
                description={step.description}
                image={step.image}
            />
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{background: 'black', color: 'yellow'}}
        color='yellow'
        variant='text'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{color: 'yellow'}}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size='small'
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{color: 'yellow'}}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Carousel;
