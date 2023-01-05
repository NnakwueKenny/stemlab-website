import {  Button, Container, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link as Link2 } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import { Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';


const messageExamples = [
    {
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    }
];

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(2)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

const FooterSection = () => {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        <Box sx={{ }} ref={ref}>
            <Paper sx={{ bottom: 0, left: 0, right: 0, padding: 3 }} elevation={1} py={2}>
                <Container sx={{ display: 'flex', flexDirection: { xs: 'column' }, justifyContent: 'center' }} className="sm:flex sm:items-center sm:justify-between">
                    <Box className='w-full flex flex-col md:flex-row gap-y-4 items-center justify-between py-3'>
                        <Button sx={{ paddingX: '15px', display: 'flex'}} component='a' href='/#' underline="none" className='gap-2 justify-center items-center w-full md:w-1/4'>
                            <AdbIcon color='secondary' />
                            <Typography>STEMLAB</Typography>
                        </Button>
                        <Box sx={{ display: {sm: 'flex'}, justifyContent: 'center', gap: '30px' }} className='gap-2 justify-center items-center w-full md:w-3/4'>
                            <Button sx={{ paddingX: '15px', display: 'flex', width: '100%' }} component='a' href='/#services' underline="none">
                                Services
                            </Button>
                            <Button  sx={{ paddingX: '10px', display: 'flex', width: '100%' }} component='a' href='/#about-us' underline="none">
                                About Us
                            </Button>
                            <Button  sx={{ paddingX: '15px', display: 'flex', width: '100%' }} component='a' href='/gallery' underline="none">
                                Gallery
                            </Button>
                            <Button  sx={{ paddingX: '15px', display: 'flex', width: '100%' }} component='a' href='/contact-us' underline="none">
                                Contact
                            </Button>
                        </Box>
                    </Box>
                </Container>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <Container>
                    <Box className='w-full flex flex-col md:flex-row gap-y-3 items-center justify-between py-3'>
                        <Box className='w-full md:w-auto flex gap-3 justify-between'>
                            <IconButton component="a" href='https://twitter.com/kenny_nnakwue' target='_blank' className='hover:text-[#1DA1F2]' aria-label="twitter link" >
                                <Twitter />
                            </IconButton>
                            <IconButton component="a" href='https://twitter.com/kenny_nnakwue' target='_blank' className='hover:text-[#0072b1]' aria-label="linkedin link" >
                                <LinkedIn />
                            </IconButton>
                            <IconButton component="a" href='https://twitter.com/kenny_nnakwue' target='_blank' className='hover:text-[#F59E0B]' aria-label="instagram link" >
                                <Instagram />
                            </IconButton>
                            <IconButton component="a" href='https://twitter.com/kenny_nnakwue' target='_blank' className='hover:text-[#FF0000]' aria-label="youtube link" >
                                <YouTube />
                            </IconButton>
                        </Box>
                        <Typography className="block text-sm sm:text-center">
                            &copy; &nbsp;
                            {new Date().getFullYear()}
                            <Link2 href="/" className="hover:text-orange-500"> STEMLAB™ </Link2>
                            All Rights Reserved.
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </Box>
    )
}

export default FooterSection