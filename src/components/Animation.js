import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import MortyImage from '../img/npg.png';
import HistoryImage from '../img/png.png';
import '../App.css'; 

export default function Animation() {


  return (
    <div className='animation'>
        <Grid container spacing={6}>
            <Grid item sm={6} md={6} lg={6} xl={6}>
            <CardMedia
                      className='img'
                      component="img"
                      height="500"
                      image={HistoryImage}
                />
            </Grid>
            <Grid item sm={6} md={6} lg={6} xl={6}>
            <CardMedia
                      className='img1'
                      component="img"
                      height="500"
                      image={MortyImage}
                />
            </Grid>
        </Grid>
        <Grid className='button-history'
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start">
        <Link style={{textDecoration: 'none'}} to='/characteres'><Button 
        variant="contained" 
        color="primary">characteres
        </Button>
        </Link>
        </Grid>
        <div className='botton-history'></div>
    </div>
  )
}
