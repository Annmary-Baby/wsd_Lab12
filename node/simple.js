const  fs=require('fs');
fs.writeFile('Sample.js', 'Hello I-MCA', (err)=>{
    console.log('Content Updated');
})