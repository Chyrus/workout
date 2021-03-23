import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import ExerciseSet from './exerciseSet.component';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const ExerciseMain = ({ classes, theme }) => {

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
            <Divider style={{marginTop: theme.spacing(1)}}/>

            <Grid container xs={12}>
                <Grid item xs={1}>
                    <IconButton style={{color: green[300]}} edge="start" aria-label="add a set" onClick={addSet}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={8}>
                    <FormControl style={{marginTop: '0px', width: '100%'}} className={classes.formControl}>
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
                    <Grid item xs={1} />
                    <Grid item xs={1}>
                        <IconButton edge="end" aria-label="delete" onClick={removeSet}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>

            <Grid container align="center">
                <Grid item xs={1}>
                    <Typography variant="caption">Set</Typography> 
                </Grid>
                <Grid item xs={4}>
                <Typography variant="caption">Prev. Best</Typography> 
                </Grid>
                <Grid item xs={5}>
                <Typography variant="caption">Weight(lbs)</Typography> 
                </Grid>
                <Grid item xs={2}>
                <Typography variant="caption">Reps</Typography> 
                </Grid>
            </Grid>

            {setsDisplayed >= 1 ? <ExerciseSet classes={classes} theme={theme} setNumber={1}/> : null}
            {setsDisplayed > 1 ? <ExerciseSet classes={classes} theme={theme} setNumber={2}/> : null}
            {setsDisplayed > 2 ? <ExerciseSet classes={classes} theme={theme} setNumber={3}/> : null}
            {setsDisplayed > 3 ? <ExerciseSet classes={classes} theme={theme} setNumber={4}/> : null}
            {setsDisplayed > 4 ? <ExerciseSet classes={classes} theme={theme} setNumber={5}/> : null}
            {setsDisplayed > 5 ? <ExerciseSet classes={classes} theme={theme} setNumber={6}/> : null}
            {setsDisplayed > 6 ? <ExerciseSet classes={classes} theme={theme} setNumber={7}/> : null}

        </div>   
    )
}

export default ExerciseMain