import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//Styles Theme
const useStyles = makeStyles({
    root: { flexGrow: 1, borderRadius: 0, textAlign: "center", marginTop: 20, marginBottom: 30 },
  button: {
    margin: 10, textTransform: 'capitalize',
  },
  buttonOutlined: {
    margin: 10, marginTop: 25, marginBottom: 30, textTransform: 'capitalize', color: '#DB0011',
    borderRadius: '0'
  },
  });




export default function Pagination({prev, next, onPrevious, onNext}) {
    const classes = useStyles();
//onClick Function
    const handlePrevious = () =>{
        onPrevious();
    }
    const handleNext = () =>{
        onNext();
    }

  return( 
  <div className={classes.root}> 
  {
      prev ?(
      <Button variant="contained"
     color="primary" 
     className={classes.button}
     onClick={handlePrevious}>Prev
     </Button>
     )
     : null} 
     {
         next ?(
             <Button variant="contained"
      color="primary" 
      className={classes.button}
      onClick={handleNext}>Next
      </Button>
         )
         : null

     }
  </div>
     
  );
}
