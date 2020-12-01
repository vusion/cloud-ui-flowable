const components = require('./config');
const path = require('path');
const fs = require('fs-extra');
const map = [];
const getUsage = require('vusion/lib/lcap');
const root = path.join(__dirname, '../../src/components');
components.forEach((component) => {
    if (component.show) {
        const targetFile = path.join(root, component.name + '.vue');
        map.push(getUsage(targetFile));
    }
});

fs.writeFileSync(path.join(__dirname, './usage.json'), JSON.stringify(map, null, 4));
