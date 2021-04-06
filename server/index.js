const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors')
const dbConnection = require('./database')
const userRouter = require('./routes/user')
const exerciseRouter = require('./routes/exercise.router')
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');

const apiPort = 5000
const app = express()

app.use(morgan('dev'))
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



// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/user', userRouter)

app.use('/api', exerciseRouter)



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))