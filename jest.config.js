// For jest to execute enzyme.config.js
// when running tests, so global variables
// can be used in tests

module.exports = {
    setupFiles: [
        '<rootDir>/enzyme.config.js',
    ]
};