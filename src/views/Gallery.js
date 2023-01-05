import { Box } from '@mui/material'
import React from 'react'
import FooterSection from '../components/FooterSection'

const Gallery = () => {
  return (
    <div>
        Gallery Page
        {/* Footer Section */}
        <Box id='contact-us' sx={{pb: 1}}>
            <FooterSection />
        </Box>
    </div>
  )
}

export default Gallery;