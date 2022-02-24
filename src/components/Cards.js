import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';


//Style
const useStyles = makeStyles({
  root: {
    flexGrow: 1, borderRadius: 0,
    maxWidth: 345,
    height: 480,
  },
  CardContent:{
    height: 160,
  }
});

export default function Cards({characters}) {
const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
      {characters.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
              <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                    />
                  <CardContent className={ classes.CardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Gender:  {item.gender}-
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Species: {item.species}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Status: {item.status}    
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Location: {item.location.name} 
                      </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            ))}
          </Grid>
  </Container>
  );
}
