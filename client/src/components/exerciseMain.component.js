// React
import React , { useEffect }from 'react';
import {  animateScroll as scroll } from 'react-scroll'

// MUI
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';

// Components
import ExerciseSet from './ExerciseSet.component';

// Other
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

const ExerciseMain = ({ toggleExercise, exerciseNumber, workoutData, setWorkoutData }) => {

    const classes = useStyles();
    const theme = useTheme();


    const handleDropdownChange = (event) => {

        const oldData = workoutData;
        const thisExercise = oldData[exerciseNumber];
        const idSplit = event.target.value.split(':::') 
        thisExercise.exerciseId = idSplit[0]
        thisExercise.exerciseName = idSplit[1]
        oldData[exerciseNumber] = thisExercise;
        setWorkoutData(oldData);
        console.log(workoutData)

    }

    const handleDeleteExercise = () => {
        const oldWorkout = workoutData;
        oldWorkout[exerciseNumber] = {"data": [{   weight: "",
                reps: "",
                setNumber: "1",
            }, null, null, null, null, null, null], "exerciseId": "", "exerciseName": ""}
        setWorkoutData(oldWorkout);
        console.log(workoutData);
        toggleExercise(exerciseNumber);
    }

    const [setsDisplayed, setSetsDisplayed] = React.useState( 1 );
    const [exercisesList, setExercisesList] = React.useState( [] );

    const [fadesList, setFadesList] = React.useState( [true, false, false, false, false, false, false, false, false, false] );
    const fadeTimeout = {'enter': 500, 'exit': 150}

    const weightRefs = React.useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const repRefs = React.useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

    useEffect(() => {
        // axios.get(`https://workout.jakeku.dev/api/exercises`)
        axios.get('/api/exercises')
            .then(res => {
                const list = res.data.data;
                list.sort(function(a,b){ 
                    var x = a.name < b.name? -1:1; 
                    return x; 
                });
                setExercisesList(list);
                // console.log(exercisesList)
        })}, [])

    const addSet = () => {
        const oldArr = [...fadesList];
        oldArr[setsDisplayed ] = true;
        setFadesList(oldArr);
        if (setsDisplayed < 7) {setSetsDisplayed(setsDisplayed + 1);
            scroll.scrollToBottom();

        const oldWorkout = workoutData;
        const oldSet = oldWorkout[exerciseNumber].data[setsDisplayed]
        if (oldSet === null) {
            const newSet = {weight: "",
                            reps: "",
                            setNumber: setsDisplayed + 1,}
            oldWorkout[exerciseNumber].data[setsDisplayed] = newSet;
            setWorkoutData(oldWorkout);
            console.log(workoutData)
        }
        }
        


      };

    const removeSet = () => {
        if (setsDisplayed > 1) {
            const oldArr = [...fadesList];
            oldArr[setsDisplayed - 1] = false;
            setFadesList(oldArr);

            setSetsDisplayed(setsDisplayed - 1);
            scroll.scrollToBottom();    
        }
        
        const oldWorkout = workoutData;
        oldWorkout[exerciseNumber].data[setsDisplayed - 1] = null;
        setWorkoutData(oldWorkout);
        console.log(workoutData)
    }

    return (
        <div class="exercise">
            
            <Box style={{marginTop: theme.spacing(1), marginBottom: 5}} >

                <Paper elevation={16} square={true}>

                    <Box style={{marginBottom: 2}}>

                        <Paper style={{margin: 3, backgroundColor: theme.palette.primary.main}} elevation={3} square={true}>

                             <Grid container xs={12}>
                
                                 <Grid item xs={10}>

                                    <FormControl style={{marginTop: '0px', width: '95%'}} className={classes.formControl}>

                                        <NativeSelect
                                        className={classes.selectEmpty}
                                        onChange={handleDropdownChange}
                                        // inputProps={{
                                        //     name: 'name',
                                        // }}
                                        >
                                        <option aria-label="None" value="" placeholder>Select exercise</option>
                                        {exercisesList.map((exercise) => 
                                                <option value={exercise._id + ":::" + exercise.name}>{exercise.name}</option>
                                        )}

                                        </NativeSelect>

                                    </FormControl>

                                 </Grid>
                
                                <Grid item xs={2}>
                                    <IconButton edge="end" aria-label="delete" onClick={handleDeleteExercise}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>

                            </Grid>

                        </Paper>

                    </Box>

                    <Box style={{marginBottom: 2}}>

                        <Paper elevation={3} square={true}>

                            <Grid container align="center">

                                <Grid item xs={1}>
                                    <Typography variant="caption">Set</Typography> 
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant="caption">Prev. Best</Typography> 
                                </Grid>

                                <Grid item xs={4}>
                                    <Typography variant="caption">Weight(lbs)</Typography> 
                                </Grid>

                                <Grid item xs={2}>
                                    <Typography variant="caption">Reps</Typography> 
                                </Grid>

                            </Grid>

                        </Paper>
                        
                    </Box>

                    {/* {setsDisplayed >= 1 ? <Fade in={fadesList[0]}><div><ExerciseSet setNumber={1} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null}
                    {setsDisplayed > 1 ? <Fade in={fadesList[1]}><div><ExerciseSet setNumber={2} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null}
                    {setsDisplayed > 2 ? <Fade in={fadesList[2]}><div><ExerciseSet setNumber={3} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null}
                    {setsDisplayed > 3 ? <Fade in={fadesList[3]}><div><ExerciseSet setNumber={4} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null}
                    {setsDisplayed > 4 ? <Fade in={fadesList[4]}><div><ExerciseSet setNumber={5} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null}
                    {setsDisplayed > 5 ? <Fade in={fadesList[5]}><div><ExerciseSet setNumber={6} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null} */}
                    {/* {setsDisplayed > 6 ? <Fade in={fadesList[6]}><div><ExerciseSet setNumber={7} setsDisplayed={setsDisplayed} removeSet={removeSet}/></div></Fade> : null} */}

                    {[0, 1, 2, 3, 4, 5, 6].map((i) =>

                        <Fade in={fadesList[i]} 
                            timeout={fadeTimeout} 
                            unmountOnExit> 
                            <div>
                                <ExerciseSet setNumber={i} 
                                    setsDisplayed={setsDisplayed} 
                                    removeSet={removeSet} 
                                    addSet={addSet}
                                    weightRefs={weightRefs}
                                    repRefs={repRefs}
                                    workoutData={workoutData}
                                    setWorkoutData={setWorkoutData}
                                    exerciseNumber={exerciseNumber} />
                            </div>
                        </Fade>
                    
                    )}

                    {/* <Fade in={fadesList[0]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={0} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet} /></div></Fade>
                    <Fade in={fadesList[1]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={1} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade>
                    <Fade in={fadesList[2]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={2} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade>
                    <Fade in={fadesList[3]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={3} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade>
                    <Fade in={fadesList[4]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={4} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade>
                    <Fade in={fadesList[5]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={5} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade>
                    <Fade in={fadesList[6]} timeout={fadeTimeout} unmountOnExit><div><ExerciseSet setNumber={6} setsDisplayed={setsDisplayed} removeSet={removeSet} addSet={addSet}/></div></Fade> */}


                    <Grid container align="center">

                        <Grid item xs={12}>
                            {/* <Fade in={buttonFade}> */}
                            <Button style={{fontSize: '13px', width: '90%', minHeight: '30px', margin: 5, backgroundColor: theme.palette.secondary.light}} size="small" variant="contained"  onClick={addSet}>
                                Add Set
                            </Button>
                            {/* </Fade> */}
                        </Grid>

                    </Grid>
            
                 </Paper>

            </Box>
            {/* <FormControlLabel
             control={<Switch checked={buttonFade} onChange={handleChange} />}
                label="Show"
                /> */}
            
        </div>   
    )
}

export default ExerciseMain