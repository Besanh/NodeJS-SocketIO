var fs = require('fs');
var noidung = fs.readFileSync(__dirname+'/danhsach.txt');
console.log(noidung);
console.log(noidung.toString());

fs.readFile(__dirname+'/readme.txt', 'utf-8', function(err, content){
    if(err)
    {
        return console.log(err);
    }
    console.log(content);
});
console.log('Reading file...');