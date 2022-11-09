import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import appstore from '../../images/images.png'
import gogglestore from '../../images/Get-It-On-Google-Play-Logo-Vector-1.png'
import Fab from '@mui/material/Fab';
import './Footer.css';
import Divider from '@mui/material/Divider';

function Copyright(props) {
    return (
        <Typography variant="body1" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
            <Link color="inherit" href="https://mui.com/" sx={{ textDecoration: 'none' }}>
                Plannet Technolgies Inc.
            </Link>{' '}
        </Typography>
    );
}

function CopyrightXs(props) {
    return (
        <Typography variant="body1" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
            <Link color="inherit" href="https://mui.com/" sx={{ textDecoration: 'none' }}>
                All Rights Reserved By Plannet Technolgies Inc.
            </Link>{' '}
        </Typography>
    );
}



const footers = [

    {

        description: ['FAQ', 'Contact', ' Terms of Service', 'Careers', ' Planner Reference Sheet', 'Privacy Policy'],
    }
];

function Footer() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            {/* Footer */}
            <Container
                component="footer"
                sx={{


                    py: [3, 6],
                }}
            >
                <Box sx={{ flexGrow: 1, display: { xs: 'contents', md: 'none' } }}>

                    <Grid container spacing={4} >

                        <Grid item xs={12}  >

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"

                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '60px'

                                }}
                            >
                                plannet
                            </Typography>

                            <Typography variant="subtitle1" component="p" color="white" sx={{
                               fontSize: '20px',
    textAlign: 'initial',
    marginLeft: '50px',
                                marginTop: '-16px'
                            }}>
                                Travel Starts Here.
                            </Typography>

                        </Grid>
                        <Grid item xs={12}  >
                            <div style={{marginTop:'-20px'}}>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: 1,
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={appstore} height={35}
                                        width={100} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: 1,
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={gogglestore} height={35}
                                        width={100} />
                                </Box>

                            </div>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab1'>

                                    Become a Plannet
                                    Planner
                                </Fab>
                            </Box>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Link href="#" variant="subtitle1" className='link'>
                                    Learn more about Planners
                                </Link>
                            </Box>
                        </Grid>
                        {footers.map((footer) => (
                            <Grid item xs={12} key={footer.title} sx={{ textAlign: 'center', marginLeft:'22px'}}>
                                <ul style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}>
                                    {footer.description.map((item) => (
                                        <li key={item} style={{
                                            margin: '0 8px 4px 0',
                                            display: 'inline-block'
                                        }}>
                                            <Link href="#" variant="subtitle1" sx={{ color: 'white', textDecoration: 'none', fontSize: '12px' }}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                       
                        <Box
                            component="div"
                            sx={{

                                color: (theme) =>
                                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
mt:2,
                                borderRadius: 2,
                                fontSize: '0.875rem',
                                fontWeight: '700',
                            }}
                        >
                         <Divider sx={{ borderColor:'white',borderBottomWidth: 1,marginRight: '-30px ', }}/>
                            <CopyrightXs sx={{
                                mt: 3, color: 'white',
                                fontSize: '12px',
                                marginLeft: '40px',
                                fontWeight:'600'
   
   
                            }} />
                        </Box>

                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Grid container spacing={6} >

                        <Grid item xs={4}  >

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"

                                sx={{
                                    fontFamily: 'sans-serif',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '60px'

                                }}
                            >
                                plannet
                            </Typography>

                            <Typography variant="subtitle1" component="p" color="white" sx={{
                                fontSize: '16px', textAlign: 'initial',
                                marginLeft: '62px',
                                marginTop: '-16px'
                            }}>
                                Travel Starts Here.
                            </Typography>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Copyright sx={{
                                    mt: 5, color: 'white',
                                    fontSize: '14px',
                                    marginLeft: '54px'
                                }} />
                            </Box>
                        </Grid>
                        {footers.map((footer) => (
                            <Grid item xs={4} key={footer.title} sx={{ textAlign: 'initial', }}>
                                <ul>
                                    {footer.description.map((item) => (
                                        <li key={item} >
                                            <Link href="#" variant="subtitle1" sx={{ color: 'white', textDecoration: 'none' }}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}

                        <Grid item xs={4}  >
                            <div>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: 1,

                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={appstore} height={40}
                                        width={120} />
                                </Box>
                                <Box
                                    component="div"
                                    sx={{
                                        display: 'inline',
                                        p: 1,
                                        color: (theme) =>
                                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                        borderRadius: 2,
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                    }}
                                >
                                    <img src={gogglestore} height={40}
                                        width={120} />
                                </Box>

                            </div>
                            <Box
                                component="div"
                                sx={{
                                    p: 1,

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab1'>

                                    Become a Plannet
                                    Planner
                                </Fab>
                            </Box>
                            <Box
                                component="div"
                                sx={{

                                    color: (theme) =>
                                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                }}
                            >
                                <Link href="#" variant="subtitle1" className='link'>
                                    Learn more about Planners
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}

export default function Pricing() {
    return <Footer />;
}