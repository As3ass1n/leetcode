const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '../')
const readmePath = path.resolve(__dirname, '../README.md')
const filenames = fs.readdirSync(rootDir);
const data = filenames.filter((filename) => {
  const regExp = /^\d.+js$/
  return regExp.test(filename)
}).sort((file1, file2) => {
  const reg = /\D+/
  const num1 = file1.split(reg)[0]
  const num2 = file2.split(reg)[0]
  return num1 - num2;
}).map((filename) => {
  console.log(filename);
  let encodeFilename = filename;
  if (filename.indexOf(' ') !== -1) {
    encodeFilename = filename.split(' ').join('%20')
  }
  return `[${filename}](${path.join('./', encodeFilename)})`
}).join('  \n')

fs.writeFile(readmePath, data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
})