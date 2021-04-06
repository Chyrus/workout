// React
import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

// Other
import DateFnsUtils from '@date-io/date-fns';

const DateTimePicker = ({ selectedDate, handleDateChange }) => {

    const theme = useTheme()

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