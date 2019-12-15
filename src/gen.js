const fs = require('fs');

const filenames = fs.readdirSync("src/resources/images/");

let content = "export {\n";
filenames.forEach(filename => {
    const name = filename.split('.').slice(0, -1).join('.');
    const key = name.charAt(0).toLowerCase() + name.slice(1);
    content += `import ${key} from '../resources/images/${filename}';\n`;
});

fs.writeFile("temp.txt", content, (error) => console.log(error)); 

/*
const fs = require('fs');

const filenames = fs.readdirSync("src/resources/images/");

let content = "export {\n";
filenames.forEach(filename => {
    const name = filename.split('.').slice(0, -1).join('.');
    const key = name.charAt(0).toLowerCase() + name.slice(1);
    content += `${key},\n`;
});

fs.writeFile("temp.txt", content, (error) => console.log(error)); 
*/