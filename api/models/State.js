const mongoose = require('mongoose');

// Create Schema Model for the States data
const stateSchema = new mongoose.Schema({
    // Mongoose will automatically create a unique ID for each book
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: [true, 'Please add the State name'],
        trim: true,
        maxLength: [25, 'Name cannot be more than 25 characters']
    },
    age: {
        type: Number,
        min: [0, 'Age must be a positive number']
    },
    established: {
        year: {
            type: Number,
            required: true,
            minLength: [4, 'Year must be 4 digits'],
            maxLength: [4, 'Year must be 4 digits']
        },
        description: {
            type: String
            // required: false,
        },
    },
    bird: {
        type: String,
        // required: false,
        maxLength: [50, 'Name cannot be more than 50 characters']
    },
    flower: {
        type: String,
        // required: false,
        maxLength: [50, 'Name cannot be more than 50 characters']
    },
    counties: {
        type: Number,
        required: true,
        min: [0, 'Counties must be a positive number']
    },
    governor: {
        type: String,
        required: true,
        trim: true,
        maxLength: [75, 'Name cannot be more than 75 characters']
    }
});

module.exports = mongoose.model('State', stateSchema);