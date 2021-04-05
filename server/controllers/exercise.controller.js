const Exercise = require('../models/exercise.model')

createExercise = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an exercise',
        })
    }

    const exercise = new Exercise(body)

    if (!exercise) {
        return res.status(400).json({ success: false, error: err })
    }

    exercise
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: exercise._id,
                message: 'Exercise created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Exercise not created!',
            })
        })
}

updateExercise = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Exercise.findOne({ _id: req.params.id }, (err, exercise) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Exercise not found!',
            })
        }
        exercise.name = body.name
        exercise.type = body.type
        exercise
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: exercise._id,
                    message: 'Exercise updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Exercise not updated!',
                })
            })
    })
}

deleteExercise = async (req, res) => {
    await Exercise.findOneAndDelete({ _id: req.params.id }, (err, exercise) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: `Exercise not found` })
        }

        return res.status(200).json({ success: true, data: exercise })
    }).catch(err => console.log(err))
}

getExerciseById = async (req, res) => {
    await Exercise.findOne({ _id: req.params.id }, (err, exercise) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!exercise) {
            return res
                .status(404)
                .json({ success: false, error: `Exercise not found` })
        }
        return res.status(200).json({ success: true, data: exercise })
    }).catch(err => console.log(err))
}

getExercises = async (req, res) => {
    await Exercise.find({}, (err, exercises) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!exercises.length) {
            return res
                .status(404)
                .json({ success: false, error: `Exercise not found` })
        }
        return res.status(200).json({ success: true, data: exercises })
    }).catch(err => console.log(err))
}

module.exports = {
    createExercise,
    updateExercise,
    deleteExercise,
    getExercises,
    getExerciseById,
}