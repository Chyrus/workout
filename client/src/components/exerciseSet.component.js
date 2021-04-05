import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#7e57c2',
        main: '#673AB7',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: {
        light: '#6ec6ff',
        main: '#2196F3',
        dark: '#0069c0',
        contrastText: '#000',
      },
    },
  });


const ExerciseSet = ({ theme, setNumber, setsDisplayed, removeSet }) => {

    return (
        <div class="exerciseSet">
            <Box >
                <Paper elevation={3} square={true}>

                
            <Grid style={{marginBottom: 3}} container align="center" alignItems="center">
                <Grid item xs={1}>
                    <Typography variant="body2">{setNumber}</Typography> 
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="body2">{setNumber === 1 ? '80 x 10' : '-'}</Typography> 
                </Grid>
                <Grid item xs={4}>
                <Typography variant="body2">
                    <form>
                    <TextField style={{marginTop: '2px', marginBottom: '2px', marginRight: '5px'}} type="number" size="small" id="outlined" variant="outlined" />
                    </form>
                </Typography> 
                </Grid>
                <Grid item xs={2}>
                <Typography variant="body2">
                    <form>
                    <TextField type="number" size="small" id="outlined" variant="outlined" />
                    </form>
                </Typography> 
                </Grid>
                <Grid item xs={2}>
                    <IconButton size="small" edge="end" aria-label="delete" onClick={removeSet}>
                        {setNumber === setsDisplayed && setNumber > 1 ? <CancelIcon style={{color: customTheme.palette.secondary.dark}} /> : null}
                    </IconButton>
                </Grid>
            </Grid>
            </Paper>
            </Box>
        </div>   
    )
}

export default ExerciseSet