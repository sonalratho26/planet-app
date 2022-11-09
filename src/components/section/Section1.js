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
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={img}  />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container rowSpacing={1} mt={1} spacing={12} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
        <Grid item xs={6} sm={2} md={6} sx={{maxWidth:'100%'}}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" sx={{fontWeight:'700' , textAlign:'left'}} gutterBottom>
            Become a Plannet 
            Planner
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} sm={2} md={6} sx={{maxWidth:'100%'}}>
        <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Fab variant="extended" size="medium" color="primary" aria-label="add" className='fab'>
        
        Learn More about Planners
        <ExpandCircleDownIcon sx={{ ml: 1,transform: 'rotate(270deg)' }}/>
      </Fab>
          </Box>
          
        </Grid>
      </Grid>
    </Paper>
  );
}



export default Section1;