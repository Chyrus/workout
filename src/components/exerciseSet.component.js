import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import red from '@material-ui/core/colors/red';
import { makeStyles } from '@material-ui/core/styles';


// const ExerciseSet = ({ classes, theme, setNumber }) => {

//     return (
//         <div class="exerciseSet">
//             <Grid style={{marginBottom: theme.spacing(1)}} container align="center" alignItems="center">
//                 <Grid item xs={1}>
//                     <Typography variant="body2">{setNumber}</Typography> 
//                 </Grid>
//                 <Grid item xs={4}>
//                     <Typography variant="body2">{setNumber == 1 ? '80 x 10' : '-'}</Typography> 
//                 </Grid>
//                 <Grid item xs={5}>
//                 <Typography variant="body2">
//                     <form>
//                     <TextField style={{marginRight: '5px'}} type="number" size="small" id="outlined" variant="outlined" />
//                     </form>
//                 </Typography> 
//                 </Grid>
//                 <Grid item xs={2}>
//                 <Typography variant="body2">
//                     <form>
//                     <TextField type="number" size="small" id="outlined" variant="outlined" />
//                     </form>
//                 </Typography> 
//                 </Grid>
//             </Grid>
//         </div>   
//     )
// }

const useStyles = makeStyles({
    root: {
      color: red[800]
    }
  });

const ExerciseSet = ({ theme, setNumber, setsDisplayed, removeSet }) => {

    const classes = useStyles();
    
    return (
        <div class="exerciseSet">
            <Grid style={{marginBottom: theme.spacing(1)}} container align="center" alignItems="center">
                <Grid item xs={1}>
                    <Typography variant="body2">{setNumber}</Typography> 
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="body2">{setNumber == 1 ? '80 x 10' : '-'}</Typography> 
                </Grid>
                <Grid item xs={4}>
                <Typography variant="body2">
                    <form>
                    <TextField style={{marginRight: '5px'}} type="number" size="small" id="outlined" variant="outlined" />
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
                        {setNumber == setsDisplayed && setNumber > 1 ? <CancelIcon color="secondary"/> : null}
                    </IconButton>
                </Grid>
            </Grid>
        </div>   
    )
}

export default ExerciseSet