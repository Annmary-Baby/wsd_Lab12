const fs = require('fs');
const path = require('path');

fs.mkdir(
  path.join(__dirname, '/posts'),
  (err) => {
    if(err){
        console.log('file read error');

  
    
    }
      
  }
);