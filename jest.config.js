module.exports = {
    "verbose": true,
    "clearMocks": true,
    "collectCoverage": true,
    "setupTestFrameworkScriptFile": "./test/setupTest.js",
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./_mocks_/fileMock.js",
        "\\.(css|scss)$": "./_mocks_/styleMock.js"
    }
}

// {
//     setupFiles: [
//         './test/setupTest.js',
//     ],
//     transformIgnorePatterns: ["public"]
// };