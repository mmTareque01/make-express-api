const fs = require('fs-extra');
const path = require('path');

exports.generateFolders = async (basePath, version, module, names = []) => {
    for (const name of names) {
        await fs.ensureDir(path.join(basePath, version, name)); //creating main directory
        await fs.ensureDir(path.join(basePath, version, name, module)) //creating sub directory
        console.log(`$: ${name}>${module} created successfully!`);
    }
}