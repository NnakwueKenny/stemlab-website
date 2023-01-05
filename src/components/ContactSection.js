import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ContactSection = () => {

    return (
        <Card raised borderRadius={80} color='primary'>
            <CardActionArea sx={{paddingY: '40px'}} className='py-6'>
                <CardContent className='flex flex-col justify-center items-center py-3'>
                    <Typography component='h3' variant='h4' color="gray" gutterBottom>
                    Have any additional questions?                
                    </Typography>
                    <Typography variant="body2">
                        We are here to help
                    </Typography>
                </CardContent>
                <CardActions className='w-full flex flex-col justify-center items-center py-3'>
                    <Button component='a' href='/contact-us' size="medium" variant='outlined'
                        sx={{minWidth: 150, maxWidth: 500, width: '100%'}}
                    >
                        GET IN TOUCH
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ContactSection