import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

const DateTimePicker = ({ selectedDate, handleDateChange, classes, theme }) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <KeyboardDatePicker
                    margin="normal"
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
                    margin="normal"
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
        </MuiPickersUtilsProvider>
    )
}

export default DateTimePicker