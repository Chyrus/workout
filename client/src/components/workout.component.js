// React
import React from 'react';
import {  animateScroll as scroll } from 'react-scroll'

// MUI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Components
import DateTimePicker from './DateTimePicker.component'
import ExerciseMain from './ExerciseMain.component'

 // Other
 import 'date-fns';


const useStyles = makeStyles((theme) => ({
    stickAboveBottomNav: {
      width: '100%',
      position: 'fixed',
      bottom: '55px',
      justifyContent: 'center'
    }
  }));
  
  export default function Workout() {
  
    const classes = useStyles();
    const theme = useTheme();
  
    // initialize datePicker's date and create handler
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    // initializes exercises state and creates click handlers
    const addExercise = () => {
      if (!exerciseOneVisible) {toggleExerciseOne()}
      else if (!exerciseTwoVisible) {toggleExerciseTwo()}
      else if (!exerciseThreeVisible) {toggleExerciseThree()}
      else if (!exerciseFourVisible) {toggleExerciseFour()}
      else if (!exerciseFiveVisible) {toggleExerciseFive()}
      else if (!exerciseSixVisible) {toggleExerciseSix()}
      else if (!exerciseSevenVisible) {toggleExerciseSeven()}
      else if (!exerciseEightVisible) {toggleExerciseEight()}
      else if (!exerciseNineVisible) {toggleExerciseNine()}
      else if (!exerciseTenVisible) {toggleExerciseTen()}
      scroll.scrollToBottom();
    }
  
  
    const [exerciseOneVisible, setExerciseOneVisible] = React.useState(true);
    const [exerciseTwoVisible, setExerciseTwoVisible] = React.useState(false);
    const [exerciseThreeVisible, setExerciseThreeVisible] = React.useState(false);
    const [exerciseFourVisible, setExerciseFourVisible] = React.useState(false);
    const [exerciseFiveVisible, setExerciseFiveVisible] = React.useState(false);
    const [exerciseSixVisible, setExerciseSixVisible] = React.useState(false);
    const [exerciseSevenVisible, setExerciseSevenVisible] = React.useState(false);
    const [exerciseEightVisible, setExerciseEightVisible] = React.useState(false);
    const [exerciseNineVisible, setExerciseNineVisible] = React.useState(false);
    const [exerciseTenVisible, setExerciseTenVisible] = React.useState(false);
  
    const toggleExerciseOne = () => {
      setExerciseOneVisible(!exerciseOneVisible)
    }
  
    const toggleExerciseTwo = () => {
      setExerciseTwoVisible(!exerciseTwoVisible)
    }
  
    const toggleExerciseThree = () => {
      setExerciseThreeVisible(!exerciseThreeVisible)
    }
  
    const toggleExerciseFour = () => {
      setExerciseFourVisible(!exerciseFourVisible)
    }
  
    const toggleExerciseFive = () => {
      setExerciseFiveVisible(!exerciseFiveVisible)
    }
  
    const toggleExerciseSix = () => {
      setExerciseSixVisible(!exerciseSixVisible)
    }
  
    const toggleExerciseSeven = () => {
      setExerciseSevenVisible(!exerciseSevenVisible)
    }
  
    const toggleExerciseEight = () => {
      setExerciseEightVisible(!exerciseEightVisible)
    }
  
    const toggleExerciseNine = () => {
      setExerciseNineVisible(!exerciseNineVisible)
    }
  
    const toggleExerciseTen = () => {
      setExerciseTenVisible(!exerciseTenVisible)
    }
  
    // main logic
    return (
  
        <div>
  
          <Container maxWidth="xs" minHeight="90%">
  
            <Paper elevation={24}>
  
              <Box style={{marginTop: theme.spacing(1)}}>
  
                <DateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
  
              </Box>
  
              <div style={{margin: theme.spacing(1)}} />
  
              {exerciseOneVisible ? <ExerciseMain toggleExercise={toggleExerciseOne}/> : null}
              {exerciseTwoVisible ? <ExerciseMain toggleExercise={toggleExerciseTwo}/> : null}
              {exerciseThreeVisible ? <ExerciseMain toggleExercise={toggleExerciseThree}/> : null}
              {exerciseFourVisible ? <ExerciseMain toggleExercise={toggleExerciseFour}/> : null}
              {exerciseFiveVisible ? <ExerciseMain toggleExercise={toggleExerciseFive}/> : null}
              {exerciseSixVisible ? <ExerciseMain toggleExercise={toggleExerciseSix}/> : null}
              {exerciseSevenVisible ? <ExerciseMain toggleExercise={toggleExerciseSeven}/> : null}
              {exerciseEightVisible ? <ExerciseMain toggleExercise={toggleExerciseEight}/> : null}
              {exerciseNineVisible ? <ExerciseMain toggleExercise={toggleExerciseNine}/> : null}
              {exerciseTenVisible ? <ExerciseMain toggleExercise={toggleExerciseTen}/> : null}
  
              <Paper elevation={24} square={true}>
  
                <Grid container align="center"> 
  
                  <Grid item xs={12}>
  
                    <Button style={{fontSize: '15px', width: '90%', minHeight: '30px', margin: 5}} size="large" disableRipple={true} variant="contained" color='secondary' onClick={addExercise}>
  
                      Add Exercise
  
                    </Button>
  
                  </Grid>
  
                </Grid>
  
              </Paper>
  
            </Paper>
  
            <div style={{marginBottom: '113px'}} />
  
          </Container>
             
          <Button className={classes.stickAboveBottomNav} style={{marginTop: theme.spacing(1), marginBottom: 0, fontSize: '18px', width: '100%', minHeight: '50px', backgroundColor: theme.palette.primary.light}} size="large" variant="contained">
  
                  End Workout
  
          </Button>
  
          

        </div>
    );  
  }