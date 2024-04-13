const path = require('path');

exports.loadConfig = () => {
    const configPath = path.join(process.cwd(), 'scaffold.config.js');
    try {
        return require(configPath); // Attempt to load the config
    } catch (error) {
        console.error('Error loading config.js. Make sure it exists and is correctly formatted.');
        process.exit(1); // Exit if config cannot be loaded
    }
}
