import fs from 'node:fs';
const content = "Hello World";

fs.writeFile('message.txt', content, function(err){ 
    if(err){ 
        console.log("error");
    }else { 
        console.log("Success");
    }
}); 

