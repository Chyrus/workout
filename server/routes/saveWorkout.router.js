const express = require('express')
const passport = require('../passport')
const saveWorkoutController = require('../controllers/saveWorkout.controller')
const router = express.Router()



router.post('/saveSet', saveWorkoutController.saveSet)
// router.put('/exercise/:id', ExerciseController.updateExercise)
// router.delete('/exercise/:id', ExerciseController.deleteExercise)
// router.get('/exercise/:id', ExerciseController.getExerciseById)
// router.get('/exercises', ExerciseController.getExercises)

module.exports = router