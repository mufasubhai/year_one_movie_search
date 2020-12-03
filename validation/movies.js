const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMovieInput(dat) {
    const errors = {};
    const data = {...dat};

    data.title = validText(data.title) ? data.title : '';
    data.type = validText(data.type) ? data.type : '';


}