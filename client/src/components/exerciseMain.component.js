// React
import React from 'react';
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

// Components
import ExerciseSet from './exerciseSet.component';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

const ExerciseMain = ({ toggleExercise }) => {

    const classes = useStyles();
    const theme = useTheme();

    const [setsDisplayed, setSetsDisplayed] = React.useState(1);

    const addSet = () => {
        setSetsDisplayed(setsDisplayed + 1);
        scroll.scrollToBottom();
      };

    const removeSet = () => {
        if (setsDisplayed > 1) {
            setSetsDisplayed(setsDisplayed - 1);
            scroll.scrollToBottom();
        }
        
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
                                        inputProps={{
                                            name: 'name',
                                        }}
                                        >
                                        <option aria-label="None" value="" placeholder>Select exercise</option>
                                        <optgroup label="Chest">
                                            <option value="benchPress">Bench Press</option>
                                            <option value="flys">Flys</option>
                                        </optgroup>
                                        <optgroup label="Legs">
                                            <option value="legPress">Leg Press</option>
                                            <option value="legCurls">Leg Curls</option>
                                        </optgroup>
                                        </NativeSelect>

                                    </FormControl>

                                 </Grid>
                
                                <Grid item xs={2}>
                                    <IconButton edge="end" aria-label="delete" onClick={toggleExercise}>
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

                    {setsDisplayed >= 1 ? <ExerciseSet setNumber={1} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 1 ? <ExerciseSet setNumber={2} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 2 ? <ExerciseSet setNumber={3} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 3 ? <ExerciseSet setNumber={4} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 4 ? <ExerciseSet setNumber={5} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 5 ? <ExerciseSet setNumber={6} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}
                    {setsDisplayed > 6 ? <ExerciseSet setNumber={7} setsDisplayed={setsDisplayed} removeSet={removeSet}/> : null}

                    <Grid container align="center">

                        <Grid item xs={12}>
                            <Button style={{fontSize: '13px', width: '90%', minHeight: '30px', margin: 5, backgroundColor: theme.palette.secondary.light}} size="small" variant="contained"  onClick={addSet}>
                                Add Set
                            </Button>
                        </Grid>

                    </Grid>
            
                 </Paper>

            </Box>
            
        </div>   
    )
}

export default ExerciseMain