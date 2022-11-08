import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import './Banner.css';

function Banner(props) {
    const { post } = props;
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <Paper
            sx={{
                position: 'relative',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#0e8049',
                marginTop: '10px'
            }}
        >
        
            {/* Increase the priority of the hero background image */}
            {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: '#0e8049',
                }}
            />
   
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} >
            
                    <Box
                        sx={{
                            position: 'relative',
                            pr: { md: 0 },
                        }}
                    >
                     <div role="presentation" style={{paddingLeft: '25px'}} >
                     <Breadcrumbs aria-label="breadcrumb" sx={{color:'white'}}>
        <Link underline="hover" color="inherit" href="/">
        Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          
        >
          Careers
        </Link>
      </Breadcrumbs>
                     </div>
                        <ImageList
                            variant="quilted"
                            cols={5}
                            gap={8}
                        >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{borderRadius:'10px'}}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                        {/* <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                           Travel the world with confidence
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                        
                        </Typography>
                        <Link variant="subtitle1" href="#">
                           
                        </Link> */}
                
                    </Box>
                
                
                </Grid>
            </Grid>
         
        </Paper>
    );
}



export default Banner;


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',

    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        rows: 1
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',

    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',

    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',


    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',

    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //   title: 'Sea star',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //   title: 'Bike',
    //   cols: 2,
    // },
];