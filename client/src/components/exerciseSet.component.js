// React
import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

const ExerciseSet = ({ setNumber, setsDisplayed, removeSet, addSet, weightRefs, repRefs }) => {

    const theme = useTheme();

    return (
        <div class="exerciseSet">

            <Box >

                <Paper elevation={3} square={true}>

                    <Grid style={{marginBottom: 3}} container align="center" alignItems="center">

                        <Grid item xs={1}>
                            <Typography variant="body2">{setNumber + 1}</Typography> 
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="body2">{setNumber === 0 ? '80 x 10' : '-'}</Typography> 
                        </Grid>

                        <Grid item xs={4}>
                        <Typography variant="body2">
                            {/* <form> */}
                            <TextField autoFocus style={{marginTop: '2px', marginBottom: '2px', marginRight: '5px'}} type="number" size="small" id="outlined" variant="outlined" 
                                
                                inputRef={weightRefs.current[setNumber]}
                                InputProps={{
                                    onKeyUp: event => {
                                      const { keyCode } = event;
                                      // console.log(keyCode);
                                      if (keyCode === 13) {
                                        repRefs.current[setNumber].current.focus();
                                      } else if (keyCode === 8 && setsDisplayed > 1 || keyCode === 46 && setsDisplayed > 1) {
                                        if (weightRefs.current[setNumber].current.value == "") {
                                          removeSet();
                                          repRefs.current[setNumber - 1].current.focus();
                                        }
                                      }
                                    }}}
                            />
                            {/* </form> */}
                        </Typography> 
                        </Grid>

                        <Grid item xs={2}>
                        <Typography variant="body2">
                            {/* <form> */}
                            <TextField type="number" inputRef={repRefs.current[setNumber]} size="small" id="outlined" variant="outlined" 
                                InputProps={{
                                    onKeyUp: event => {
                                      const { keyCode } = event;
                                      // console.log(keyCode);
                                      if (keyCode === 13) {
                                        addSet();
                                      } else if (keyCode === 46 || keyCode === 8 || keyCode === 67) {
                                          console.log(repRefs.current[setNumber].current.value)
                                          if (repRefs.current[setNumber].current.value == "") {
                                            weightRefs.current[setNumber].current.focus();

                                          }
                                        
                                        
                                      }
                                    }}}
                            />
                            {/* </form> */}
                        </Typography> 
                        </Grid>

                        <Grid item xs={2}>
                            
                                {setNumber + 1 === setsDisplayed && setNumber > 0 ? <IconButton size="small" edge="end" aria-label="delete" onClick={removeSet}><CancelIcon style={{color: theme.palette.secondary.dark}} /></IconButton> : null}
                            
                        </Grid>

                    </Grid>

                </Paper>

            </Box>
            
        </div>   
    )
}

export default ExerciseSet