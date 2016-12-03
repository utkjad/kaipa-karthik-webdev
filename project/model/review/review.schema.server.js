module.exports = function () {

    var mongoose = require('mongoose');
    var ReviewSchema = mongoose.Schema({
        title: String,
        description: String,
        timestamp: {type: Date, default: Date.now()},
        movieId: Number,
        _movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie'},
        _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        rating: Number
    }, {collection: 'bbb.review'});
    return ReviewSchema;

};