import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'uppercase',
    border: '1px solid',
    backgroundColor: 'primary',
    borderColor: 'primary',
    padding: '12px 50px',
    fontSize: '16px',
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:hover': {
      borderColor: 'primary',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'primary',
      borderColor: 'primary',
    },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  });

const HeroCarousel = () => {
    var carouselItems = [
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
                carouselItems.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    )
}

const CarouselItem = ({item}) => {
    return (
        <div className='h-[450px] md:h-[650px] xl:h-[680px]'>
            <Paper elevation={3} sx={{height: '100%', border: '10px'}} variant="outlined" className='relative border-2'>
                <Box className='absolute w-full h-full flex flex-col gap-8 items-center justify-center text-white text-center px-8 md:px-16 font-semibold' sx={{zIndex: 'tooltip'}}>
                    <Typography variant='h4' component='h2'>{item.name}</Typography>
                    {/*item.icon*/}
                    <img alt='' src='./images/hero-icon-1.svg' />
                    <BootstrapButton component='a' href='/contact-us' className="CheckButton"  variant='outlined' >
                        Learn More
                    </BootstrapButton>
                </Box>
                <div className='absolute top-0 w-full h-full'>
                    <div className='relative w-full h-full'>
                        <div className='absolute h-full w-full bg-gray-600 bg-opacity-50 '></div>
                        <img alt='hero-carousel-background' src={item.img} className='w-full h-full'/>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default HeroCarousel;