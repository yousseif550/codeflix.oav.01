const fs = require('fs')

let regex = /^[[\w][^\n]*/gm;
let configFile = 'php.json'  

let fileContent = fs.readFileSync('env').toString()
let found = fileContent.match(regex)

  fs.open(configFile, 'w+', function (err, f) {
    if (err) {
        return console.error(err); 
    }
  })

  fs.writeFile(configFile, JSON.stringify(found, null, '\t'),(err) => {
    if (err) throw err;
  })





