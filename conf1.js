// conf1.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec1.js'],
    capabilities: {
        'browserName': 'firefox'
    }    
}