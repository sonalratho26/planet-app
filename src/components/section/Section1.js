import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Section1(props) {
  const { post } = props;

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
        backgroundImage: `url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20210711%2Foriginal%2Fpngtree-green-healthy-low-carbon-travel-banner-picture-image_1115465.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Ftravel&tbnid=hmOrOjCtgkWesM&vet=10CAEQMyjQAWoXChMI2PzZm9Se-wIVAAAAAB0AAAAAEAk..i&docid=_IKLOALI7UKZMM&w=1200&h=438&q=travel%20background%20hd&hl=en-GB&ved=0CAEQMyjQAWoXChMI2PzZm9Se-wIVAAAAAB0AAAAAEAk)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={'https://source.unsplash.com/random'}  />}
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
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
       
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            
            </Typography>
            <Link variant="subtitle1" href="#">
              
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}



export default Section1;