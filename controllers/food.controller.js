const path = require('node:path')

const getfood = function(req, res){
    res.sendFile(path.join(__dirname , '..' , 'public' , 'image.png'))
}

module.exports = getfood