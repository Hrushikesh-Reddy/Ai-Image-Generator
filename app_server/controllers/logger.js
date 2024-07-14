const fs = require('fs')

function log(link){
    fs.appendFile('app_server/controllers/links.txt', '\n'+link+'\n', (err)=>{
        if(err){
            throw err
        }/* else{
            console.log('append success !!')
        } */
    });
}

module.exports = {log}