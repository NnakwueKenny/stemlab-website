import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import LightTooltip from './LightTooltip';

const ServicesSection = () => {
    
    const servicesContent = [
        {
            bntText: 'CO-WORK',
            toolTipText: 'We offer a mix of creativity, work spaces at zero cost for young tech entrepreneurs and innovators with viable ideas',
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            bntText: 'RESOURCES',
            toolTipText: 'You have an idea and you have resources to develop it, we can manage the process of development for you.',
            image: 'https://images.pexels.com/photos/8922399/pexels-photo-8922399.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            bntText: 'MENTORSHIP',
            toolTipText: 'We have in house mentors and external individuals with a strong background that contribute to providing mentorship to startups and young innovation that are members of our community.',
            image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            bntText: 'MAKERS SPACE',
            toolTipText: 'We offer a maker space where young innovators can create things a place for hand on learning with all tool for creativity offering 3D printing, VR, Robotics and IOT.',
            image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            bntText: 'STEM LEARNING CENTER',
            toolTipText: 'We have in house STEM experts who deliver the pedagogy and emphasize on bridging the learning gap by putting children at the core of experience, making them active learners other than passive listeners.',
            image: 'https://images.pexels.com/photos/7750690/pexels-photo-7750690.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            bntText: 'INTERNSHIP PROGRAMME',
            toolTipText: 'Our participants are set to gain practical hands on skills and knowledge. Which can be immediately applied to both their professional workplace as well as towards their personal career development',
            image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]

    return (
        <>
            <Typography id='services' variant='h4' component='h2' color='primary' className='text-center pt-8'>
                Our Services
            </Typography>
            <Typography variant='h6' component='h3' color='secondary' className='text-center py-2'>
                We Are A Company Focused In Creating An Enabling Environment For Most Startups
            </Typography>
            <Typography variant='span' component='p' className='text-center text-gray-400 py-2'>
                Stemlab is creating a generation of ecosystem that enhances tech entrepreneurship in young innovators to help launch, scale and amplify their impact to foster development and growth.
            </Typography>
            <Box className='py-6 gap-6 md:gap-7 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesContent.map(item => (
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="services-image-item"
                                />
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                            <div className='flex px-6 py-4'>
                                <LightTooltip placement='top' title={item.toolTipText}>
                                    <Button variant='outlined'>{item.bntText}</Button>
                                </LightTooltip>
                            </div>
                        </Card>
                    ))
                }
            </Box>
        </>
    )
}

export default ServicesSection;