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
import Fade from '@material-ui/core/Fade';

// Components
import DateTimePicker from './DateTimePicker.component'
import ExerciseMain from './ExerciseMain.component'

 // Other
 import 'date-fns';
 import axios from 'axios'


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

    const fadeTimeout = {'enter': 1000, 'exit': 75}

    // initialize datePicker's date and create handler
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [userId, setUserId] = React.useState(null);

    React.useEffect(() => {
      axios.get('/user')
      .then(response => {
        if (!response.data.errmsg) {
          setUserId(response.data.user._id)
        }
      }).catch(error => {
        console.log('getuser error')
        console.log(error)
      })
    
    console.log(userId)
    });
    
    const [workoutData, setWorkoutData] = React.useState({
      0:
        {"data": [{   weight: "",
            reps: "",
            setNumber: "1",
        }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      1: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      2: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      3: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      4: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      5: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      6: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      7: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      8: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
      9: {"data": [{   weight: "",
      reps: "",
      setNumber: "1",
  }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""},
    });



    const handleEndWorkout = (event) => {

      console.log('handleEndWorkout')
      event.preventDefault()
      const sets = [];
      for (const exercise in workoutData) {
        // console.log(workoutData[exercise])
        // console.log(workoutData[exercise].exerciseName)
        workoutData[exercise].data.forEach(set => {
          if (set !== null) {
            if (set['weight'] !== "") {
              // console.log(set)
              let newSet = {}
              newSet['weight'] = set['weight']
              newSet['reps'] = set['reps']
              newSet['setNumber'] = set['setNumber']
              newSet['exerciseName'] = workoutData[exercise].exerciseName
              newSet['exerciseId'] = workoutData[exercise].exerciseId
              newSet['userId'] = userId
              sets.push(newSet)
            }
          }
        })
      }

      axios
        .post('/api/save/saveSet', 
            sets
        )
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {

            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
      
    }
  
    // initializes exercises state and creates click handlers
    const addExercise = () => {
      if (!exercisesVisible[0]) {toggleExercisesVisible(0)}
      else if (!exercisesVisible[1]) {toggleExercisesVisible(1)}
      else if (!exercisesVisible[2]) {toggleExercisesVisible(2)}
      else if (!exercisesVisible[3]) {toggleExercisesVisible(3)}
      else if (!exercisesVisible[4]) {toggleExercisesVisible(4)}
      else if (!exercisesVisible[5]) {toggleExercisesVisible(5)}
      else if (!exercisesVisible[6]) {toggleExercisesVisible(6)}
      else if (!exercisesVisible[7]) {toggleExercisesVisible(7)}
      else if (!exercisesVisible[8]) {toggleExercisesVisible(8)}
      else if (!exercisesVisible[9]) {toggleExercisesVisible(9)}
      scroll.scrollToBottom();
      

    }
  
    const [exercisesVisible, setExercisesVisible] = React.useState([true, false, false, false, false, false, false, false, false, false]);

    const toggleExercisesVisible = (index) => {
      const values = [...exercisesVisible]
      const visible = values[index]
      values[index] = !visible
      setExercisesVisible(values)
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

              {/* create exerciseMain components */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
              <Fade in={exercisesVisible[i]} 
                timeout={fadeTimeout} 
                unmountOnExit> 
                <div>
                    <ExerciseMain 
                      toggleExercise={toggleExercisesVisible}
                      exerciseNumber={i}
                      workoutData={workoutData}
                      setWorkoutData={setWorkoutData} />
                </div>
              </Fade>
              )}
  
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

          <br/>

          {/* <pre>
          {JSON.stringify(workoutData, null, 4)}
          </pre> */}
          {/* <pre>
          {JSON.stringify(exercisesVisible, null, 2)}
          </pre> */}
             
          <Button onClick={handleEndWorkout} className={classes.stickAboveBottomNav} style={{marginTop: theme.spacing(1), marginBottom: 0, fontSize: '18px', width: '100%', minHeight: '50px', backgroundColor: theme.palette.primary.light}} size="large" variant="contained">
  
                  End Workout
  
          </Button>
  
          

        </div>
    );  
  }