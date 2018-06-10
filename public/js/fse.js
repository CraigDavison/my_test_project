const fs = require('fs');

let dirCreate = (dir) => {
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

module.exports = {
    dirCreate
}