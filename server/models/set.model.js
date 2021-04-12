const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Set = new Schema(
    {
        setNumber: { type: Number, required: true },
        exerciseName: { type: String, required: true },
        exerciseId: { type: mongoose.Types.ObjectId, required: true },
        weight: { type: Number, required: true},
        reps: { type: Number, required: true},
        userId: { type: mongoose.Types.ObjectId, required: true },


    },
    { timestamps: true },
)

module.exports = mongoose.model('set', Set)