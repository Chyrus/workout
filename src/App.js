import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import 'date-fns';

import Button from '@material-ui/core/Button'
import ExerciseMain from './components/exerciseMain.component'
import SideMenu from './components/SideMenu.component'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TopBar from './components/topBar.component'
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DateTimePicker from './components/dateTimePicker.component'

const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
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
}));

export default function App() {

  const classes = useStyles();
  const theme = useTheme();

  // initialize SideMenu drawer's open state and create click handlers
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // initialize datePicker's date and create handler
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // initializes exercises state and creates click handlers
  const [exercisesDisplayed, setExercisesDisplayed] = React.useState(1);
  const addExercise = () => {
    setExercisesDisplayed(exercisesDisplayed + 1);
    scroll.scrollToBottom();

  }
  const removeExercise = () => {
    if (exercisesDisplayed > 1) {
      setExercisesDisplayed(exercisesDisplayed - 1);
      scroll.scrollToBottom();
    }
  }

  // main logic
  return (
    <ThemeProvider theme={customTheme}>
    <div className={classes.root}>
      <CssBaseline />

      <TopBar drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} classes={classes} theme={theme} />

      <SideMenu drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} classes={classes} theme={theme} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
    
          <DateTimePicker selectedDate={selectedDate} handleDateChange={handleDateChange} classes={classes} theme={theme} />

          {exercisesDisplayed >= 1 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 1 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 2 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 3 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 4 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 5 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 6 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 7 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 8 ? <ExerciseMain classes={classes} theme={theme}/> : null}
          {exercisesDisplayed > 9 ? <ExerciseMain classes={classes} theme={theme}/> : null}

          <Divider style={{margin: theme.spacing(1)}} />

          <Grid container align="center"> 
            <Grid item xs={6}>
              <Button style={{width: '90%'}} size="medium" variant="contained" color='primary' onClick={addExercise}>
                Add Exercise
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button style={{width: '90%'}} size="medium" variant="contained" color="secondary" onClick={removeExercise}>
                Remove Exercise
              </Button>
            </Grid> 
          </Grid>
          
          
        </Container>
       </main>

    </div>
    </ThemeProvider>
  );  
}