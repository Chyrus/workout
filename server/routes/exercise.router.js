const express = require('express')
const passport = require('../passport')
const ExerciseController = require('../controllers/exercise.controller')
const router = express.Router()



router.post('/exercise', ExerciseController.createExercise)
router.put('/exercise/:id', ExerciseController.updateExercise)
router.delete('/exercise/:id', ExerciseController.deleteExercise)
router.get('/exercise/:id', ExerciseController.getExerciseById)
router.get('/exercises', ExerciseController.getExercises)

module.exports = router