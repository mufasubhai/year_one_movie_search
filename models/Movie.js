const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    upVote: {
        type: Number,
        default: 0,
        required: false
    },
    downVote: {
        type: Number,
        default: 0,
        required: false
    }
}, {
    timestamps: true
    
})


const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
