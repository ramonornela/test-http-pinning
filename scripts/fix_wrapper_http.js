const fs = require('fs');
const path = require('path');

fs.createReadStream(path.resolve('scripts/index.js'))
  .pipe(fs.createWriteStream(path.resolve('node_modules/@ionic-native/http/index.js')));
