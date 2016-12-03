module.exports = function () {

    var mongoose = require('mongoose');
    var UserSchema = mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: String,
        firstName: String,
        lastName: String,
        facebook: {id: String, token: String},
        email: String,
        imgUrl: String,
        phone: String,
        likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}],
        movieLikes: [String],
        followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        roles: {type: String, enum: ['user', 'admin'], default: 'user'},
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'bbb.user'});
    return UserSchema;

};