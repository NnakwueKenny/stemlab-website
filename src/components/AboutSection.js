import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';


import OurProgrammes from './OurProgrammes';
import OurTeam from './OurTeam';

const About = () => {
    return (
        <Box>
            <Typography id='about-us' variant='h4' component='h2' color='primary' className='text-center pt-6 pb-3'>
                About us
            </Typography>

            <Typography variant='span' component='p' className='text-gray-400 py-2 px-2 text-justify'>
                We are an ecosystem built to support ICT focused tech entrepreneurs and young individuals integrating the STEM pedagogy.
                We have built a framework for innovative minds create great solutions, enterprises and companies to solve most of the biggest challenge in the society. We created a company focused in creating an enabling environment for most startups.
                STEMLAB was established to empower, promote and position Africa especially Nigeria in technology and startup ecosystem with a vision of using technology as a strategy to combat unemployment.
            </Typography>

            { /* Meet Our Team */}
            <OurTeam />

            { /* Our Programmes */}
            <OurProgrammes />
        </Box>
    )
}

export default About