const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors')
const dbConnection = require('./database')
const userRouter = require('./routes/user')
const exerciseRouter = require('./routes/exercise.router')
const saveWorkoutRouter = require('./routes/saveWorkout.router')
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const path = require('path');

const apiPort = 5001
const app = express()

app.use(morgan('dev'))

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

app.use(cors())
app.use(express.json());

// Sessions
app.use(
	session({
		secret: 'supersecretsecret420blazeit', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(express.static(path.resolve(__dirname + '/../client/build/')))

// Routes
app.use('/user', userRouter)

app.use('/api/save', saveWorkoutRouter)

app.use('/api', exerciseRouter)



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
});



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))