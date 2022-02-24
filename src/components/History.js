import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MortyImage from '../img/image3.png';
import HistoryImage from '../img/image9.jpg';
;


//Style
const useStyles = makeStyles({
  root: {
    flexGrow: 1, borderRadius: 0,
    maxWidth: 345,
  },
  historyContainer:{
    marginTop: 100,
  },
  text:{
 fontSize: 20,
 letterSpacing:1,
  }
});
export default function History() {
    const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid className={classes.historyContainer} container spacing={3}>
          <Grid item sm={12} md={6}  lg={6} >
                <CardMedia
                      component="img"
                      height="500"
                      image={HistoryImage}
                />
            </Grid>
            <Grid item md={6} lg={6} >
                      <Typography className={classes.text} component="h2">
                            The show revolves around the adventures of the members
                            of the Smith household, which consists of parents Jerry and Beth,
                            their children Summer and Morty, and Beth's father, Rick Sanchez 
                            , who lives with them as a guest. According to Justin Roiland,
                            the family lives outside of Seattle, Washington.
                            The adventures of Rick and Morty, however, take place across
                            an infinite number of realities, with the characters travelling to other
                            planets and dimensions through portals and Rick's flying car.
                            Rick is an eccentric and alcoholic mad scientist, who eschews many 
                            ordinary conventions such as school, marriage, love, and family.
                            He frequently goes on adventures with his 14-year-old grandson,
                            Morty, a kind-hearted but easily distressed boy, whose naïve but
                            grounded moral compass plays counterpointto Rick's Machiavellian ego.
                            Morty's 17-year-old sister, Summer, is a more conventional teenager who
                            worries about improving her status among her peers and sometimes follows
                            Rick and Morty on their adventures.
                      </Typography>
            </Grid>
            <Grid item md={6} lg={6}>
            <Typography className={classes.text} component="h2">
            
             The kids' mother, Beth,
            is a generally level-headed person and assertive force in the household, though
            self-conscious about her professional role as a horse surgeon. She is dissatisfied
            with her marriage to Jerry, a simple-minded and insecure person, who disapproves of
            Rick's influence over his family. Different versions of the characters inhabit other
            dimensions throughout the show's multiverse and their personal characteristics can
            vary from one reality to another. The show's original Rick identifies himself as
            "Rick Sanchez of Earth Dimension C-137", in reference to his original universe,
            but this does not necessarily apply to every other member of the Smith household.
            For instance, in the first-season episode "Rick Potion #9", after turning the entire
            world population into monsters, Rick and Morty move to a different dimension,
            leaving Summer, Beth and Jerry behind.
            </Typography>
            </Grid>
            <Grid item sm={12} md={6}  lg={6} >
                <CardMedia
                      component="img"
                      height="500"
                      image={MortyImage}
                />
            </Grid>
          </Grid>
  </Container>
  );
}
