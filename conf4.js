// conf4.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec4.js'],
    capabilities: {
        'browserName': 'firefox'
    }    
}