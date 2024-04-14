const fs = require('fs-extra');
const path = require('path');
const { capitalize } = require('../toCapitalize');
const { handler } = require('../apiHandler');
const { success } = require('../successMessage');
const { generateService } = require('../generateService');
const { generateController } = require('../generateController');

exports.generateModule = async (folders, basePath, version, module) => {


    // Creating api
    const controllerNames = []
    var routeContent = ''
    for (const file of handler) {

        //creating service layer
        controllerNames.push({
            name: module + file.name,
            path: folders[1] + "/" + module + "/" + `${module + file.name}.${folders[1]}.js`,

        })
        await generateService(basePath, version, module, folders[2], file)


        //creating controller layer
        await generateController(basePath, version, module, folders[1], file, folders[2])

        routeContent += file.route(module + file.name, `${folders[1]}/${module}/${module + file.name}.${folders[2]}.js`)

    }
    //creating routes

    const routePath = path.join(basePath, version, folders[0], module, `route.js`);
    var routeMaker = `const express = require('express');
const router = express.Router();
        `
    for (let name of controllerNames) {
        routeMaker += `
const {${name.name}} = require("../../${name.path}")`
    }

    routeContent = routeMaker + routeContent

    routeContent += "module.exports = router"
    await fs.outputFile(routePath, routeContent);

    success(module)
}