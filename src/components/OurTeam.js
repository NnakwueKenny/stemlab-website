import { CardBody, CardFooter } from '@material-tailwind/react';
import { Box, Card, CardHeader, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';
import LightTooltip from './LightTooltip';

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const OurTeam = () => {
    const teamMembers = [
        {
            name: 'Prince Achoja',
            role: 'CEO / Executive Director',
            img: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            img: 'https://images.pexels.com/photos/5717550/pexels-photo-5717550.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            img: 'https://images.pexels.com/photos/7793664/pexels-photo-7793664.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            img: 'https://images.pexels.com/photos/7681016/pexels-photo-7681016.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            img: 'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            img: 'https://images.pexels.com/photos/5717550/pexels-photo-5717550.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        <Box>
            <Typography variant='h5' component='h2' color='secondary' className='text-center pt-6 pb-3'>
                Meet Our Team
            </Typography>
            <Box className='py-6 gap-6 md:gap-7 grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    teamMembers.map(item => (
                        <Card>
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.img}
                                alt="Paella dish"
                            />
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
    )
}

export default OurTeam