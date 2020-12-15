const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMovieInput(dat) {
    let errors = {};
    const data = {...dat};

    data.title = validText(data.title) ? data.title : '';


}