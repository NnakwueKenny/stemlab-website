import React from 'react';
import FooterSection from '../components/FooterSection';

import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Paper, Step, StepButton, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Circle } from '@mui/icons-material';


const galleryContent = [
    {
        header: 'December',
        content: [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
                author: '@bkristastucchio',
                rows: 2,
                cols: 2,
                featured: true
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
                author: '@katie_wasserman',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                author: '@silverdalex',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                author: '@southside_customs',
                cols: 2,
            },
        ]
    },
    {
        header: 'January',
        content: [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
                author: '@bkristastucchio',
                rows: 2,
                cols: 2,
                featured: true
            },
            {
                img: 'https://images.pexels.com/photos/3366282/pexels-photo-3366282.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Mushrooms',
                author: '@silverdalex',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
                author: '@katie_wasserman',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                author: '@silverdalex',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                author: '@southside_customs',
                cols: 2,
            },
        ]
    },
    {
        header: 'February',
        content: [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
                author: '@bkristastucchio',
                rows: 2,
                cols: 2,
                featured: true
            },
            {
                img: 'https://images.pexels.com/photos/3366282/pexels-photo-3366282.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Mushrooms',
                author: '@silverdalex',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
                author: '@katie_wasserman',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                author: '@silverdalex',
                rows: 2,
                cols: 2,
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                author: '@southside_customs',
                cols: 2,
            },
        ]
    },
];

const Gallery = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const [completed, setCompleted] = React.useState({});
    const handleStep = (step) => () => {
        setActiveStep(step);
      };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box maxWidth='xl' sx={{ width: '100%', marginBottom: '40px' }} className='px-2 md:px-10'>
                    <Typography variant='h4' color='primary' component='h2' >Our Gallery</Typography>

                    <Box sx={{ width: '100%' }}>
                        <Stepper nonLinear orientation="vertical" activeStep={activeStep}>
                            {galleryContent.map((label, index) => {
                                console.log(label);
                                console.log('this is the inded:', index);
                                return (
                                    <Step key={index} completed={completed[index]}>
                                        <StepButton icon={<Circle color={`${index === activeStep? 'primary': 'secondary'}`}/>} sx={{color: 'primary'}} onClick={handleStep(index)}>
                                            {
                                                <ImageListItem key="Subheader" >
                                                    <Typography variant='h5' className='py-3' component="h3">{label.header}</Typography>
                                                </ImageListItem>
                                            }
                                        </StepButton>

                                        <StepContent>
                                            <Box sx={{ mb: 1 }}>
                                                <ImageList variant="masonry"
                                                    sx={{
                                                        columnCount: {
                                                            xs: '1 !important',
                                                            sm: '2 !important',
                                                            md: '3 !important',
                                                            lg: '4 !important',
                                                        }
                                                    }}
                                                    gap={8} className='md:grid-cols-3'
                                                >
                                                    {label.content.map((itemContent) => (
                                                        <ImageListItem key={itemContent.img}>
                                                            <img
                                                                src={`${itemContent.img}?w=248&fit=crop&auto=format`}
                                                                srcSet={`${itemContent.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                                alt={itemContent.title}
                                                                loading="lazy"
                                                            />
                                                            <ImageListItemBar
                                                                title={itemContent.title}
                                                                subtitle={itemContent.author}
                                                                actionIcon={
                                                                    <IconButton
                                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                                        aria-label={`info about ${itemContent.title}`}
                                                                    >
                                                                        <InfoIcon />
                                                                    </IconButton>
                                                                }
                                                            />
                                                        </ImageListItem>
                                                    ))}
                                                </ImageList>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                )
                            })}
                        </Stepper>
                    </Box>
                </Box>
            </Box>
            {/* Footer Section */}
            <Box id='contact-us' sx={{ pb: 1 }}>
                <FooterSection />
            </Box>
        </>
    )
}

export default Gallery;