const fs = require('fs');
const path = require('path');

fs.writeFile(
  path.join(__dirname, '/posts','BlogPost.txt'),'Hello',
  (err) => {
    if(err){
        console.log('file read error');
    
    }
      
  }
);