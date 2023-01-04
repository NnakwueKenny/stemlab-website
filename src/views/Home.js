import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, ListItem, Paper, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel';
import About from '../components/About';
import Services from '../components/Services';
// import heroIcon from '../images/hero-icon-1.svg'

function HeroCarousel()
{
    var items = [
        {
            name: "We Are An Ecosystem Built To Support ICT Focused Tech Entrepreneurs And Young Individuals.",
            img: "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: '../images/hero-icon-1.svg'
        },
        {
            name: "We Are An Ecosystem Built To Support ICT Focused Tech Entrepreneurs And Young Individuals.",
            img: "https://images.pexels.com/photos/5576311/pexels-photo-5576311.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: '../images/hero-icon-1.svg'
        },
        {
            name: "We Are An Ecosystem Built To Support ICT Focused Tech Entrepreneurs And Young Individuals.",
            img: "https://images.pexels.com/photos/7742589/pexels-photo-7742589.jpeg?auto=compress&cs=tinysrgb&w=600",
            icon: '../images/hero-icon-1.svg'
        }
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    )
}

function CarouselItem({item}) {
    return (
        <div className='h-[450px] md:h-[550px]'>
            <Paper elevation={3} sx={{height: '100%'}} variant="outlined" className='relative'>
                <Box className='absolute w-full h-full flex flex-col gap-8 items-center justify-center text-gray-400 md:text-white text-center px-8 md:px-16 font-semibold' sx={{zIndex: 'tooltip'}}>
                    <Typography variant='h4' component='h2'>{item.name}</Typography>
                    {/*item.icon*/}
                    <img alt='' src='../images/hero-icon-1.svg' />
                    <Button className="CheckButton" variant='outlined' >
                        Learn More
                    </Button>
                </Box>
                <div className='absolute top-0 w-full h-full'>
                    <div className='relative w-full h-full'>
                        <div className='absolute h-full w-full bg-gray-300 md:bg-gray-600 md:bg-opacity-75 bg-opacity-0'></div>
                        <img alt='hero-carousel-background' src={item.img} className='w-full h-full hidden md:block'/>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const Home = () => {

    return (
        <div>
            <HeroCarousel />
            <Container>

                {/* Services Section */}
                <Box>
                    <Services />
                </Box>
                
                {/* About Us Section */}
                <Box id='about-us'>
                    <About />
                </Box>
                
            </Container>
        </div>
    )

}

// {[...new Array(12)]
//     .map(
//         () => `Cras mattis consectetur purus sit amet fermentum.
//       Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//       Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//       Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//     )
//     .join('\n')}

export default Home;