// conf2.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec2.js'],
    capabilities: {
        'browserName': 'firefox'
    }    
}