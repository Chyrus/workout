const Set = require('../models/set.model')

saveSet = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a set',
        })
    }

    // const set = new Set(body)

    // if (!set) {
    //     return res.status(400).json({ success: false, error: err })
    // }

    // set
    //     .save()
        // .then(() => {
        //     return res.status(201).json({
        //         success: true,
        //         id: set._id,
        //         message: 'Set created!',
        //     })
        // })
        // .catch(error => {
        //     return res.status(400).json({
        //         error,
        //         message: 'Set not created!',
        //     })
        // })
    console.log(body)
    Set.insertMany(body)
    .then(function(){
        console.log("Data inserted")  // Success
        return res.status(201).json({
            success: true,
            // id: set._id,
            message: 'Workout saved!',
        })
    }).catch(function(error){
        console.log(error)      // Failure
        return res.status(400).json({
            error,
            message: 'Workout not saved!',
        })
    });
    // .then(() => {
    //     return res.status(201).json({
    //         success: true,
    //         id: set._id,
    //         message: 'Set created!',
    //     })
    // })
    // .catch(error => {
    //     return res.status(400).json({
    //         error,
    //         message: 'Set not created!',
    //     })
    // })
}


module.exports = {
    saveSet,
}