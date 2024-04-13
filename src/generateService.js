const fs = require('fs-extra');
const path = require('path');

exports.generateService = async (basePath, version, module, service, file) => {
    const servicePath = path.join(basePath, version, service, module, `${module + file.name}.${service}.js`);
    const serviceContent = file.service(module + file.name + capitalize(service));
    await fs.outputFile(servicePath, serviceContent);
}