import React from 'react';

import {
    AppBar, Avatar, Box,
    Button, Grid,
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

    // breaks at width 756
    //
    return (
        <AppBar >
            <Toolbar sx={{ background: 'white', color:'#54a5f7'}}>
                <Grid container spacing={3} justifyContent="space-between" alignItems="center" sx={{marginTop:'0px !important'}}>
                    <Grid sm={3} sx={{textAlign:'start'}}>
                        <Button>
                            <ArrowBack /> Back to HomePage
                        </Button>
                    </Grid>
                    <Grid sm={6} sx={{display: 'contents', textAlign:'center'}} >
                        <Button sx={{background:'#e8eedc'}}>
                            <Avatar src={'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'}/>
                            <Typography >Konstantinos</Typography>
                        </Button>
                    </Grid>
                    <Grid sm={3}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx= {{ flexGrow: 1, textAlign: 'end' }}
                        >
                            SpaceTime Maps 🚩
                        </Typography>
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    );
}


export default SpaceMenu;
