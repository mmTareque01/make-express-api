#!/usr/bin/env node

const { program } = require('commander');
const { loadConfig } = require('./src/config');
const { generateModule } = require('./src/generator/generateModule');
const { generateFolders } = require('./src/generateFolders');


program
    .name("create-scaffold")
    .description("CLI to scaffold Express.js API structure")
    .option("-v, --version <apiVersion>", "Version of the API") // -v >> define version
    .option("-m, --module <modulename>", "Name of the module")  // -m >> module
    .option("-a, --api <apiname>", "Name of the api") // -f >>api
    .action(async (options) => {
        const {
            version,
            module,
            api
        } = options;

        if (!version) return console.error("Version is missing!");
        if (!module && !api) return console.error("Module name or API name is missing! Learn more >>> https://github.com/mmTareque01/make-express-api#readme");

        const userConfig = loadConfig(); //loading configuration from user end
        const folders = [userConfig?.folders?.route, userConfig?.folders?.controller, userConfig?.folders?.service] || ['routes', 'controllers', 'services'];

        // Define paths
        const basePath = process.cwd();

        // Ensure base structure
        await generateFolders(basePath, version, module, folders)

        if (module) {
            await generateModule(folders, basePath, version, module)
        }

        if (api) {
            console.log("api is defined");
        }


    });

program.parse(process.argv);
