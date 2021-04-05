import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'date-fns';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import ExerciseMain from './components/exerciseMain.component'
import {  animateScroll as scroll } from 'react-scroll'
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DateTimePicker from './components/dateTimePicker.component'
import BottomNav from './components/bottomNav.component'
import Paper from '@material-ui/core/Paper';


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

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      light: '#b085f5',
      main: '#7e57c2',
      dark: '#4d2c91',
      contrastText: '#fff',
    },
    secondary: {
      light: '#88ffff',
      main: '#4dd0e1',
      dark: '#009faf',
      contrastText: '#000',
    },
  },
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appBar: {
    background: 'linear-gradient(45deg, ' + customTheme.palette.primary.dark + ' 20%, ' + customTheme.palette.primary.main + ' 80%)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItemIcon: {
    minWidth: '30px',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  palette: {
    primary: blue,
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  stickAboveBottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: '55px',
    justifyContent: 'center'
  }
}));

export default function App() {

  const classes = useStyles();
  const theme = useTheme();

  // initialize datePicker's date and create handler
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // initializes exercises state and creates click handlers
  const addExercise = () => {
    if (!exerciseOneVisible) {toggleExerciseOne()}
    else if (!exerciseTwoVisible) {toggleExerciseTwo()}
    else if (!exerciseThreeVisible) {toggleExerciseThree()}
    else if (!exerciseFourVisible) {toggleExerciseFour()}
    else if (!exerciseFiveVisible) {toggleExerciseFive()}
    else if (!exerciseSixVisible) {toggleExerciseSix()}
    else if (!exerciseSevenVisible) {toggleExerciseSeven()}
    else if (!exerciseEightVisible) {toggleExerciseEight()}
    else if (!exerciseNineVisible) {toggleExerciseNine()}
    else if (!exerciseTenVisible) {toggleExerciseTen()}
    scroll.scrollToBottom();
  }


  const [exerciseOneVisible, setExerciseOneVisible] = React.useState(true);
  const [exerciseTwoVisible, setExerciseTwoVisible] = React.useState(false);
  const [exerciseThreeVisible, setExerciseThreeVisible] = React.useState(false);
  const [exerciseFourVisible, setExerciseFourVisible] = React.useState(false);
  const [exerciseFiveVisible, setExerciseFiveVisible] = React.useState(false);
  const [exerciseSixVisible, setExerciseSixVisible] = React.useState(false);
  const [exerciseSevenVisible, setExerciseSevenVisible] = React.useState(false);
  const [exerciseEightVisible, setExerciseEightVisible] = React.useState(false);
  const [exerciseNineVisible, setExerciseNineVisible] = React.useState(false);
  const [exerciseTenVisible, setExerciseTenVisible] = React.useState(false);

  const toggleExerciseOne = () => {
    setExerciseOneVisible(!exerciseOneVisible)
  }

  const toggleExerciseTwo = () => {
    setExerciseTwoVisible(!exerciseTwoVisible)
  }

  const toggleExerciseThree = () => {
    setExerciseThreeVisible(!exerciseThreeVisible)
  }

  const toggleExerciseFour = () => {
    setExerciseFourVisible(!exerciseFourVisible)
  }

  const toggleExerciseFive = () => {
    setExerciseFiveVisible(!exerciseFiveVisible)
  }

  const toggleExerciseSix = () => {
    setExerciseSixVisible(!exerciseSixVisible)
  }

  const toggleExerciseSeven = () => {
    setExerciseSevenVisible(!exerciseSevenVisible)
  }

  const toggleExerciseEight = () => {
    setExerciseEightVisible(!exerciseEightVisible)
  }

  const toggleExerciseNine = () => {
    setExerciseNineVisible(!exerciseNineVisible)
  }

  const toggleExerciseTen = () => {
    setExerciseTenVisible(!exerciseTenVisible)
  }

  // main logic
  return (
    <ThemeProvider theme={customTheme}>

      <div className={classes.root}>

      <CssBaseline />

        <Container maxWidth="xs" minHeight="90%">

          <Paper elevation={24}>

            <Box style={{marginTop: theme.spacing(1)}}>

              <DateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange} classes={classes} theme={theme} />

            </Box>

            <div style={{margin: theme.spacing(1)}} />

            {exerciseOneVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseOne}/> : null}
            {exerciseTwoVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseTwo}/> : null}
            {exerciseThreeVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseThree}/> : null}
            {exerciseFourVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseFour}/> : null}
            {exerciseFiveVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseFive}/> : null}
            {exerciseSixVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseSix}/> : null}
            {exerciseSevenVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseSeven}/> : null}
            {exerciseEightVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseEight}/> : null}
            {exerciseNineVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseNine}/> : null}
            {exerciseTenVisible ? <ExerciseMain classes={classes} theme={theme} toggleExercise={toggleExerciseTen}/> : null}

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
           
        <Button className={classes.stickAboveBottomNav} style={{marginTop: theme.spacing(1), marginBottom: 0, fontSize: '18px', width: '100%', minHeight: '50px', backgroundColor: customTheme.palette.primary.light}} size="large" variant="contained">

                End Workout

        </Button>

        <BottomNav/>

      </div>

    </ThemeProvider>
  );  
}