import React from 'react';

import {
    AppBar,
    Button, Grid, SwipeableDrawer,
    Toolbar,
    Typography,
} from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DehazeIcon from '@mui/icons-material/Dehaze';
import '../CSS/space-menu-fixes.css'

function SpaceMenu() {
    const [needsDrawer, setNeedsDrawer] = React.useState<boolean>(false)

    window.onresize = ({target }) => {
        const { innerWidth } = target as Window;

        if (innerWidth < 756) {
            setNeedsDrawer(true)
        }
        else {
            setNeedsDrawer(false);
        }
    }

    // breaks at width 756, so we provide drawer instead of menu
    return (
         <AppBar >
            <Toolbar sx={{ background: 'white', color:'#54a5f7', hidden:'true'}}>
                { needsDrawer ?
                    <SpaceDrawer/> :
                    <Grid container spacing={3} justifyContent="space-between" alignItems="center" sx={{marginTop:'0px !important'}}>
                        <Grid sm={3} sx={{textAlign:'start'}}>
                            <Button>
                                <ArrowBackIosIcon /> Back to HomePage
                            </Button>
                        </Grid>
                        <Grid sm={6} sx={{display: 'contents', textAlign:'center'}} >
                            {/*<Button sx={{background:'#e8eedc'}}>*/}
                            {/*    <Avatar src={'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'}/>*/}
                            {/*    <Typography >Konstantinos</Typography>*/}
                            {/*</Button>*/}
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
                    </Grid>  }
            </Toolbar>
         </AppBar>

    );
}


export default SpaceMenu;


// Drawer
function SpaceDrawer(){
    const [state, setState] = React.useState<boolean>(false)

    const toggleDrawer =
        ( open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    return (<React.Fragment key={'left'}>
        <Button onClick={toggleDrawer(true)}
                sx={{
                    width:'55px',
                    height:'55px',
                    textAlign:'end'
                }}>
            <DehazeIcon />
        </Button>
        <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer( true)}
        >
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width:'300px'}}>
                <Grid>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{padding: '10px 0 100px 0'}}
                    >
                        SpaceTime Maps 🚩
                    </Typography>
                </Grid>
                <Grid  sx={{display: 'contents'}} >
                    {/*<Button sx={{background:'#e8eedc'}}>*/}
                    {/*    <Avatar src={'https://lh6.googleusercontent.com/-UYKv4Oo4AL4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reOcBoiruxfuiRHs8VAoE-HvgnBDw/mo/photo.jpg?sz=256'}/>*/}
                    {/*    <Typography >Konstantinos</Typography>*/}
                    {/*</Button>*/}
                </Grid>

                <Grid
                    sx={{padding: '100px 0 100px 0'}}>
                    <Button>
                        <ArrowBackIosIcon /> Back to HomePage
                    </Button>
                </Grid>
            </Grid>
        </SwipeableDrawer>
    </React.Fragment>);
}
