const mongoose = require('mongoose');

const governorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'Please add the name of the Governor'],
        unique: true,
        trim: true,
        maxLength: [75, 'Name cannot be more than 75 characters'],
    },
    timeInOffice: {
        years: {
            type: Number,
            required: true,
        },
        startYear: {
            type: Number,
            // required: false,
            minLength: [4, 'Year must be 4 digits'],
            maxLength: [4, 'Year must be 4 digits'],
        },
    },
    website: {
        type: String,
        match: [
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
            'Please check the format of the web address',
        ],
    },
    bio: {
        type: String,
        // required: false,
        maxLength: [500, 'Bio cannot be more than 500 characters'],
    },
    state: {
        type: String,
        required: true,
        trim: true,
        maxLength: [25, 'State cannot have more than 25 characters'],
    },
});

module.exports = mongoose.model('Governor', governorSchema);