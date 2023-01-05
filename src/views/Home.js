import { Box, Card, Container } from '@mui/material';
import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';

import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroCarousel from '../components/HeroCarousel';
import ServicesSection from '../components/ServicesSection';
// import heroIcon from '../images/hero-icon-1.svg'

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <Container>

                {/* Services Section */}
                <Box>
                    <ServicesSection />
                </Box>
                
                {/* About Us Section */}
                <Box >
                    <AboutSection />
                </Box>
                
                {/* Contact Us Section */}
                <Box id='contact-us' sx={{py: 5}}>
                    <ContactSection />
                </Box>
            </Container>
            
            {/* Footer Section */}
            <Box id='contact-us' sx={{pb: 1}}>
                <FooterSection />
            </Box>
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