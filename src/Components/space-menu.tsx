import React from 'react';

import {
    AppBar, Avatar, Box,
    Button,
    Toolbar,
    Typography,
} from "@mui/material";

// @ts-ignore
import logo from '../logo.svg';

import {
    ArrowBack
} from '@mui/icons-material'

interface PinData {
    lat: number;
    lon: number;
    title: string;
    description: string;
    image: string;
}



function SpaceMenu() {
    return (
        <AppBar >
            <Toolbar sx={{ background: 'white', color:'#54a5f7'}}>
                <Box>
                    <Button>
                        <ArrowBack /> Back to HomePage
                    </Button>
                </Box>
                <div style={{flexGrow: 1, display: 'contents' , padding: '0.1rem', textAlign: 'start' }}>
                    <Avatar src={logo}/>
                    <Typography>Konstantinos</Typography>
                </div>
                <Typography
                    variant="h6"
                    component="div"
                    sx= {{ flexGrow: 1,textAlign: 'end',}}
                >
                    SpaceTime Maps 🚩
                </Typography>
            </Toolbar>
        </AppBar>
    );
}


export default SpaceMenu;
