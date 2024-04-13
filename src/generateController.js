const fs = require('fs-extra');
const path = require('path');
const { capitalize } = require('./toCapitalize');

exports.generateController = async (basePath, version, module, controller, file) => {
    const controllerPath = path.join(basePath, version, controller, module, `${module + file.name}.${controller}.js`);
    const controllerContent = file.controller(module + file.name + capitalize(folders[2]), module + file.name, `${folders[2]}/${module}/${module + file.name}.${folders[2]}.js`)
    await fs.outputFile(controllerPath, controllerContent);

}