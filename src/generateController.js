const fs = require('fs-extra');
const path = require('path');
const { capitalize } = require('./toCapitalize');

exports.generateController = async (basePath, version, module, controller, file, service) => {
    const controllerPath = path.join(basePath, version, controller, module, `${module + file.name}.${controller}.js`);
    const controllerContent = file.controller(module + file.name + capitalize(service), module + file.name, `${service}/${module}/${module + file.name}.${service}.js`)
    await fs.outputFile(controllerPath, controllerContent);

}

