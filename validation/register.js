const Validator = require('validator');
const isEmpty = require('is-empty');

const validateRegisterInput = (data) => {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.passconf = !isEmpty(data.passconf) ? data.passconf : '';

    // Name checks
    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required.';
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.';
    }

    if (Validator.isEmpty(data.passconf)) {
        errors.passconf = 'Confirm password field is required.';
    }

    if (!Validator.equals(data.password, data.passconf)) {
        errors.passconf = 'Passwords must match.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};

module.exports = validateRegisterInput;