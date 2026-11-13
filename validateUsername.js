
function validateUsername(username) {

    // Username must be a string
    if (typeof username !== "string") {
        return false;
    }

    // Length must be between 5 and 20
    if (username.length < 5 || username.length > 20) {
        return false;
    }

    // Must start with a letter
    if (!/^[A-Za-z]/.test(username)) {
        return false;
    }

    // Only letters, numbers, underscore
    if (!/^[A-Za-z0-9_]+$/.test(username)) {
        return false;
    }

    return true;
}

module.exports = validateUsername;
