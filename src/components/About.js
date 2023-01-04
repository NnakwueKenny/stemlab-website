import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import LightTooltip from './LightTooltip';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Card, CardHeader, CardBody, CardFooter, Tooltip, } from "@material-tailwind/react";

const About = () => {
    const teamMembers = [
        {
            name: 'Prince Achoja',
            role: 'CEO / Executive Director',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
        {
            name: 'Salma Gambo',
            role: 'Admin Lead',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
        {
            name: 'Muhammad Abubakar',
            role: 'Internal Strategic Lead',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
        {
            name: 'Kenechukwu Nnakwue',
            role: 'Technology Lead',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
        {
            name: 'Muhammad Garba',
            role: 'Graphics Designer',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
        {
            name: 'Faruq Hassan',
            role: 'Software Lead',
            socialMedia: [
                {
                    platform: 'twitter',
                    username: '@kenny_nnakwue',
                    url: 'https://twitter.com/kenny_nnakwue',
                    icon: <TwitterIcon />,
                    iconColour: '#1DA1F2'
                },
                {
                    platform: 'linkedin',
                    username: 'Kenechukwu Nnakwue',
                    url: 'https://www.linkedin.com/in/kenechukwu-nnakwue-a854081b5/',
                    icon: <LinkedInIcon />,
                    iconColour: '#0072b1'
                },
                {
                    platform: 'instagram',
                    username: 'kenewrites',
                    url: 'https://www.instagram.com/kenewrites/',
                    icon: <InstagramIcon />,
                    iconColour: 'rgb(245 158 11)'
                },
            ]
        },
    ]
  return (
    <>
       <Typography id='about-us' variant='h4' component='h2' color='primary' className='text-center pt-6 pb-3'>
            About us
        </Typography>

        <Typography variant='span' component='p' className='text-center text-gray-400 py-2 px-2 text-justify'>
            We are an ecosystem built to support ICT focused tech entrepreneurs and young individuals integrating the STEM pedagogy.
            We have built a framework for innovative minds create great solutions, enterprises and companies to solve most of the biggest challenge in the society. We created a company focused in creating an enabling environment for most startups.
            STEMLAB was established to empower, promote and position Africa especially Nigeria in technology and startup ecosystem with a vision of using technology as a strategy to combat unemployment.
        </Typography>

        <Box>
            <Typography variant='h5' component='h2' color='secondary' className='text-center pt-6 pb-3'>
                Meet Our Team
            </Typography>
            <Box className='py-6 gap-6 md:gap-7 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    teamMembers.map(item => (
                        <Card>
                            <CardHeader floated={false} className="h-80">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center mb-auto">
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {item.name}
                                </Typography>
                                <Typography variant='span' color="secondary" className="font-medium" textGradient>
                                    {item.role}
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-between pt-2">
                                {
                                    item.socialMedia.map(socialMediaItem => (
                                        <LightTooltip placement='top' title={socialMediaItem.username}>
                                            <Link target='_blank' href={socialMediaItem.url} underline="none" color={socialMediaItem.iconColour} className='flex justify-center'>
                                                {socialMediaItem.icon}
                                            </Link>
                                        </LightTooltip>
                                    ))
                                }
                            </CardFooter>
                        </Card>
                    ))
                }
            </Box>
        </Box>
    </>
  )
}

export default About