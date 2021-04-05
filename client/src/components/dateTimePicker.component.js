import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const DateTimePicker = ({ selectedDate, handleDateChange, classes, theme }) => {

    return (
        <Box style={{marginBottom: 12}}>
        <Paper elevation={16} square={true}>
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box style={{margin: theme.spacing(1)}} >
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <KeyboardDatePicker
                    // marginTop="10px"
                    id="date-picker-dialog"
                    label="Date"
                    format="MM/dd/yy"
                    value={selectedDate}
                    
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    InputAdornmentProps={{ edge: 'end'}}
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <KeyboardTimePicker
                    // margin="normal"
                    id="time-picker"
                    label="Time"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
                </Grid>
            </Grid>
            </Box>
        </MuiPickersUtilsProvider>
        
        </Paper>
        </Box>
    )
}

export default DateTimePicker