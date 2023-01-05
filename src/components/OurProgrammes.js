import { Box } from '@mui/system'
import React from 'react'

import { Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Button, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandableCard = ({item}) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <>
                            <IconButton
                                color='primary'
                                aria-label="settings"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem
                                    onClick={() => { handleClose(); !expanded && handleExpandClick()}}
                                    aria-expanded={expanded}
                                >More Info</MenuItem>
                            </Menu>
                        </>
                    }
                    title={
                        <Typography
                            color='secondary'
                        >
                            {item.name}
                        </Typography>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Typography color='primary' pl={1}>More Info</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        color='secondary'
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
            <Card variant='primary' sx={{ maxWidth: 345 }}>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}

const programmesContent = [
    {
        name: 'MATA A FASAHA',
        content: ` From AI to coding, 3D printing and even female entrepreneurs.
            We have built a community for the indigenous Hausa tech innovators
            that allows talented Hausa women in tech to get to know and experience
            innovations first hand. Above all we understand that building network
            will support each lady to grow, integrate and become part of the tech world.
            (Discard any mussels that don&apos;t open.)
        `,
        img: 'https://images.pexels.com/photos/12662899/pexels-photo-12662899.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'YOUNG INNOVATORS CLUB (YIC)',
        content: ` The young innovators club is a community and a tech ecosystem built
            to identify young innovators minds from public schools, mentors and provide
            them platform to scale their talents. It’s a bi-weekly outreach to public
            school to identify talents in disadvantaged communities.
            (Discard any mussels that don&apos;t open.)
        `,
        img: 'https://images.pexels.com/photos/12662899/pexels-photo-12662899.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'TECH BOOTCAMPS',
        content: ` STEMLAB tech boot camps will be in several northern states,
            ranging from 1-2 days hackathon, women in tech and leadership and leadership
            skills for young entrepreneurs and those in startup space.
            (Discard any mussels that don&apos;t open.)
        `,
        img: 'https://images.pexels.com/photos/12662899/pexels-photo-12662899.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
]

const OurProgrammes = () => {

    return (
        <Box>
            <Typography variant='h5' component='h2' color='secondary' className='text-center pt-6 pb-3'>
                Our Programmes
            </Typography>
            <Box className='py-6 gap-6 md:gap-7 grid md:grid-cols-2 lg:grid-cols-3'>
            {
                programmesContent.map(item => {
                    return <ExpandableCard item={item}/>
                })
            }
            </Box>
        </Box>
    )
}

export default OurProgrammes