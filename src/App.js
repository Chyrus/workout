import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ListIcon from '@material-ui/icons/List';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
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
    background: 'linear-gradient(45deg, #440a67 10%, #6455e0 90%)',
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
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [state, setState] = React.useState({
    age: '',
    name: 'Exercise',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  function FormRow() {

    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* top app bar */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Workout Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side menu */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key='Workout'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><FitnessCenterIcon /></ListItemIcon>
            <ListItemText primary='Workout' />
          </ListItem>
          <ListItem button key='History'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><ListIcon /></ListItemIcon>
            <ListItemText primary='History' />
          </ListItem>
          <ListItem button key='Stats'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><EqualizerIcon /></ListItemIcon>
            <ListItemText primary='Stats' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key='Settings'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><SettingsIcon /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          <ListItem button key='Help'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><HelpIcon /></ListItemIcon>
            <ListItemText primary='Help' />
          </ListItem>
          <ListItem button key='Log Out'>
            <ListItemIcon className={clsx(classes.listItemIcon)}><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </Drawer>

      {/* main content  */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
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
    
    <Divider style={{marginTop: '5px'}}/>

    <Grid container align="center">
      <Grid item xs={1} />
      <Grid item xs={10}>
      <FormControl style={{marginTop: '0px'}} className={classes.formControl}>
        {/* <InputLabel htmlFor="name-native-disabled">Exercise</InputLabel> */}
        <NativeSelect
          className={classes.selectEmpty}
          value={state.name}
          onChange={handleChange}
          inputProps={{
            name: 'name',
          }}
        >
          <option aria-label="None" name="Exercise" disabled>Exercise</option>
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

    <Grid container align="center" alignItems="center">
      <Grid item xs={1}>
        <Typography variant="body2">1</Typography> 
      </Grid>
      <Grid item xs={4}>
      <Typography variant="body2">80 x 10</Typography> 
      </Grid>
      <Grid item xs={5}>
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
    </Grid>

    <Grid style={{marginTop: '5px'}} container align="center" alignItems="center">
      <Grid item xs={1}>
        <Typography variant="body2">2</Typography> 
      </Grid>
      <Grid item xs={4}>
      <Typography variant="body2">-</Typography> 
      </Grid>
      <Grid item xs={5}>
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
    </Grid>

    <Grid style={{marginTop: '10px'}} container align="center">
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Button variant="contained" color="secondary">
          Add Set
        </Button>
      </Grid>
      <Grid item xs={3} />
    </Grid>        
    
    <Divider style={{margin: '10px'}}/>

    <Grid container align="center">
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Button variant="contained" color="primary">
          Add Exercise
        </Button>
      </Grid>
      <Grid item xs={3} />
    </Grid>
        {/* <Grid container spacing={0}>
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={0}>
            <FormRow />
          </Grid>
        </Grid> */}
        </Container>
      </main>

    </div>
  );
}