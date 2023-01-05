import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import FooterSection from '../components/FooterSection';
import { Email, LinkedIn, Phone, Twitter } from '@mui/icons-material';

// import { style } from '@material-ui/core/styles';
// const useStyles = style((theme) => ({
//   root: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(4),
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//   },
// }));

const Contact = () => {
  // const classes = useStyles();
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'between'}} className='w-full flex flex-col lg:flex-row py-8 md:px-8'>
        <Box maxWidth='md' className='px-5 md:px-10 w-full'>
          <Box component='div' className='flex items-center gap-2' >
            <InfoIcon color='primary' fontSize='large'/>
            <Typography variant='h5' color='primary' component='h2' >
              GET IN TOUCH WITH US
            </Typography>
          </Box>
          <form class="mb-6 w-full">
            <div class="mb-6 w-full">
              <TextField
                size='large'
                fullWidth
                margin='normal'
                required
                id="standard-required"
                label="Your Email"
                placeholder="youremail@example.com"
                variant="standard"
              />
            </div>
            <div class="mb-6 w-full">
              <TextField
                size='large'
                fullWidth
                required
                id="standard-required"
                label="Subject"
                placeholder="Type the subject here..."
                variant="standard"
              />
            </div>
            <Box mb={7}>
              <TextField
                fullWidth
                id="standard-multiline-static"
                label="Message"
                multiline
                required
                rows={4}
                placeholder="Your message"
                variant="standard"
              />
            </Box>
            <Box>
              <Button mx={4} sx={{ color: 'primary', width: '100%' }} variant='outlined'>
                Send message
              </Button>
            </Box>
          </form>
        </Box>
        <Box maxWidth='xs' sx={{ marginBottom: '15px' }} className='px-5 md:px-10 text-gray-600 pt-4 lg:pt-0'>
          <Typography component='p' variant='h6'>More Contact Information</Typography>
          <Box className='flex gap-2 mb-2'>
            <Email />
            <Typography component='a' href='mailto:email@example.com' variant='span' className='hover:text-orange-500'>email@example.com</Typography>
          </Box>
          <Box className='flex gap-2 mb-2'>
            <Phone />
            <Typography component='a' href="tel:212-456-7890" variant='span' className='hover:text-orange-500'>212-456-7890</Typography>
          </Box>
          <Box className='flex gap-2 mb-2'>
            <LinkedIn />
            <Typography component='a' href="https://linkedin.com" variant='span' className='hover:text-orange-500'>LinkedIn</Typography>
          </Box>
          <Box className='flex gap-2 mb-2'>
            <LinkedIn />
            <Typography component='a' href="https://instagram.com" variant='span' className='hover:text-orange-500'>Instagram</Typography>
          </Box>
          <Box className='flex gap-2 mb-2'>
            <Twitter />
            <Typography component='a' href="https://twitter.com" variant='span' className='hover:text-orange-500'>Twitter</Typography>
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

export default Contact;