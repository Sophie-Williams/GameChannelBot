'use strict';

const fs = require('fs');
const path = require('path');

// Export all errors by name
fs.readdirSync(__dirname, { withFileTypes: true })
  .filter(file => /(?<!(index))\.js$/.test(file.name) && !file.isDirectory())
  .forEach(file => {
    const err = require(path.join(__dirname, file.name))
    exports[err.name] = err;
  });
