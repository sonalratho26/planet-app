/* eslint-disable no-sparse-arrays */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import './Section.css'
import Section1 from './Section1';
import Footer from '../Footer/Footer';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

}));

export default function Section() {
    return (
<div>

<Box sx={{ flexGrow: 1, display: { xs: 'contents', md: 'none' } }}>
<Box sx={{ width: '100%',
        background: 'linear-gradient(180deg, rgb(3 3 3 / 80%) 0%, rgba(0,0,0,1) 35%)',
        position: 'absolute',
        top: '200px' }} >
            <Container maxWidth="lg">
            <Typography  variant="h4" className="text" paragraph >
                            Travel the world with confidence</Typography>
                <Grid container rowSpacing={1} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" paragraph sx={{ textAlign: 'left', ml: '10px',mt:'10px', fontWeight: '600' }}>Join Us</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1"  gutterBottom sx={{ textAlign: 'left', ml: '10px',color:' #797a7a',fontWeight:'600' }}>
                            Please email <span style={{color:'white'}}>hello@plannet.io</span> with your resume and the postion you are interested in! We are excited for you to join us and help bulid our community on it's mission to see the world together.</Typography>
                    </Grid>





                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Enginerring</Typography>
                    </Grid>
                    {itemData.map((item) => (
                        <Grid item xs={6} sm={4} md={6} >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}<span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Product</Typography>
                    </Grid>
                    {productData.map((item) => (
                        <Grid item xs={6} sm={4} md={6}  >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}<span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Marketing</Typography>
                    </Grid>
                    {marketData.map((item) => (
                        <Grid item xs={6} sm={4} md={6}  >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}
                                            <span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                
                <Section1/>
                    <Footer/>
            </Container>
        </Box>
</Box>
       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
<Box sx={{ width: '100%',
        background: 'linear-gradient(180deg, rgb(3 3 3 / 80%) 0%, rgba(0,0,0,1) 35%)',
        position: 'absolute',
        top: '350px' }} >
            <Container maxWidth="lg">
            <Typography  variant="h3" className="text" paragraph >
                            Travel the world with confidence</Typography>
                <Grid container rowSpacing={1} spacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" paragraph sx={{ textAlign: 'left', ml: '10px',mt:'40px', fontWeight: '600' }}>Join Us</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1"  gutterBottom sx={{ textAlign: 'left', ml: '10px',color:' #797a7a',fontWeight:'600' }}>
                            Please email <span style={{color:'white'}}>hello@plannet.io</span> with your resume and the postion you are interested in! We are excited for you to join us and help bulid our community on it's mission to see the world together.</Typography>
                    </Grid>





                </Grid>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Enginerring</Typography>
                    </Grid>
                    {itemData.map((item) => (
                        <Grid item xs={6} sm={4} md={6} >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}<span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Product</Typography>
                    </Grid>
                    {productData.map((item) => (
                        <Grid item xs={6} sm={4} md={6}  >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}<span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className="text" sx={{ textAlign: 'left', ml: '10px', fontWeight: '600', mt: '15px' }}>Marketing</Typography>
                    </Grid>
                    {marketData.map((item) => (
                        <Grid item xs={6} sm={4} md={6}  >
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1, textAlign: 'initial' }}>
                                        <Typography component="h2" variant="h5" sx={{ fontWeight: '600', color: 'black' }}>
                                            {item.title}
                                            <span className='remote'>Remote</span>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: '600' }}>
                                            {item.address}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}



                </Grid>
                
                <Section1/>
                    <Footer/>
            </Container>
        </Box>
</Box>
        </div>
    );
}



const itemData = [
    {
        title: 'iOS Engineer',
        address: 'New York City, Global'
    },
    {

        title: 'Android Engineer',
        address: 'New York City, Global'

    },
    {

        title: 'Backend Engineer',
        address: 'New York City, Global'
    },
    {

        title: 'Web Engineer',
        address: 'New York City, Global'

    },
    {

        title: 'QA Engineer',
        address: 'New York City, Global'

    },

];



const productData = [
    {
        title: 'Product Designer',
        address: 'New York City, Global'
    },
    {

        title: 'Product Manager',
        address: 'New York City, Global'

    },
    {

        title: 'Project Manager',
        address: 'New York City, Global'
    }

];


const marketData = [
    {
        title: 'Growth Marketing Manager',
        address: 'New York City, Global'
    },
    {

        title: 'Product Marketing Manager',
        address: 'New York City, Global'

    },
    {

        title: 'Brand/Marketing Designer',
        address: 'New York City, Global'
    },
    {

        title: 'Social Media Marketing Manager',
        address: 'New York City, Global'
    }

];