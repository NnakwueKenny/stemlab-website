import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Collections, ContactPhone, DesignServices, Home, InfoOutlined, PhotoAlbum } from '@mui/icons-material';

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const drawerWidth = 240;
const navItems = [
    {
        name: 'Home',
        link: '/#',
        icon: <Home />
    },
    {
        name: 'Services',
        link: '/#services',
        icon: <DesignServices />
    },
    {
        name: 'About Us',
        link: '/#about-us',
        icon: <InfoOutlined />
    },
    {
        name: 'Gallery',
        link: '/gallery',
        icon: <Collections />
    },
    {
        name: 'Contact',
        link: '/contact-us',
        icon: <ContactPhone />
    },
];

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link underline='none' href='/' className='flex items-center'>
                <AdbIcon color='secondary' sx={{ ml: 2, }} />
                <Typography
                    p={1}
                    variant="h6"
                    noWrap
                    component="a"
                    color='primary'
                    href="/"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none',
                        display: { xs: '', md: 'none' },
                    }}
                >
                    STEMLAB
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left' }} component='a' href={item.link}>
                            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (props) => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <AppBar component="nav" sx={{ backgroundColor: 'white' }}>
                <Toolbar className='justify-between' >
                    <Box className='flex'>
                        <IconButton
                            color='secondary'
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className='flex items-center'>
                            <AdbIcon color='primary' sx={{ mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                color='secondary'
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    textDecoration: 'none',
                                    display: { xs: 'none', md: 'flex' },
                                }}
                            >
                                STEMLAB
                            </Typography>
                        </div>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, gap: '30px' }} className='gap-8'>
                        {navItems.map((item) => (
                            <Link underline="none" href={item.link} key={item.name} sx={{ color: 'primary', paddingX: '15px' }}>
                                {item.name}
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Button mx={4} sx={{ color: 'primary' }} variant='outlined'>
                            Register
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

export default Navbar;