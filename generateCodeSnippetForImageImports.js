const fs = require('fs')

const filenames = fs.readdirSync('src/resources/images/')

let importString = ''
let exportString = 'export default {\n'

filenames.forEach(filename => {
  const name = filename
    .split('.')
    .slice(0, -1)
    .join('.')
  const key = name.charAt(0).toLowerCase() + name.slice(1)
  importString += `import ${key} from '../../resources/images/${filename}';\n`
  exportString += `${key},\n`
})

fs.appendFile('codeSnippet.js', `${importString}${exportString}}`, error => console.log(error))
