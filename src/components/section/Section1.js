import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import img from '../../images/pngtree-color-travel-tourism-vacation-image_9654.jpg'
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import './Section1.css';


function Section1() {


  return (

    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          mt: 3,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          background: 'linear-gradient(234deg, rgba(18,229,86,1) 0%, rgba(43,198,120,1) 35%)'
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={img} />}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }} />
          <Grid container rowSpacing={1} mt={1} spacing={12} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
            <Grid item xs={6} sm={4} md={6} >
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 2, md: 2 },
                  pr: { md: 0 },
                  paddingLeft: '40px !important'
                }}
              >
                <Typography component="h1" variant="h3" color="inherit" sx={{ fontWeight: '700', textAlign: 'left' }} gutterBottom>
                  Become a Plannet
                  Planner
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: { xs: 1, md: 1 },

                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
              </Box>
            </Grid>
            <Grid xs={6} sm={6} md={6} sx={{ maxWidth: '100%' }}>
              <Box component="div"
                sx={{
                  p: { xs: 1, md: 6 },
                  pr: { md: 0 },
                  color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab'>

                  Learn More About Planners
                  <ExpandCircleDownIcon sx={{ ml: 1, transform: 'rotate(270deg)' }} />
                </Fab>
              </Box>
        
            </Grid>
          </Grid>
        </Box>
      </Paper>


      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          mt: 2,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          background: 'linear-gradient(234deg, rgba(18,229,86,1) 0%, rgba(43,198,120,1) 35%)'
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: 'contents', md: 'none' } }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={img} />}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }} />
          <Grid container rowSpacing={1} mt={1} spacing={12} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
            <Grid item xs={6} sm={12} md={6} sx={{ maxWidth: '100%' }}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 2, md: 6 },
                  pr: { md: 0 },
                  paddingLeft: '20px !important',
                }}
              >
                <Typography component="h1" variant="h4" color="inherit" sx={{ fontWeight: '700', textAlign: 'left' }} gutterBottom>
                  Become a Plannet
                  Planner
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: { xs: 1, md: 6 },
                  paddingRight: '290px !important',

                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
              </Box>
            </Grid>
            <Grid xs={6} sm={12} md={6} sx={{ maxWidth: '100%' }}>
              <Box component="div"
                sx={{
                  p: { xs: 1, md: 6 },
                  pr: { md: 0 },
                  paddingLeft: '20px !important',
                  color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',

                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
                <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab'>

                  Learn More About Planners
                  <ExpandCircleDownIcon sx={{ ml: 1, transform: 'rotate(270deg)' }} />
                </Fab>
              </Box>
              <Box
                component="div"
                sx={{
                  color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                  p: { xs: 1, md: 6 },
                  paddingRight: '290px !important',

                  borderRadius: 2,
                  fontSize: '0.875rem',
                  fontWeight: '700',
                }}
              >
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>

    </>
  );
}



export default Section1;