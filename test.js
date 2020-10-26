const fs = require('fs')

let regex = /./gm;
let configFile = 'php.json';
let fileContent = fs.readFileSync('php.ini', 'utf8');
let found = fileContent.match(regex);


    fs.open(configFile, 'w+', function (err, f) {
      if (err) {
          return console.error(err); 
      }
    })

    fs.writeFile(configFile, JSON.stringify(found, null, '\t'),(err) => {
      if (err) {
        throw err;
        }
    })

