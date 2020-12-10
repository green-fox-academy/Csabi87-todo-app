import fs from 'fs';

function getList() {
    let fileContent = fs.readFileSync('./list.txt').toString();
    console.log(fileContent)
}

export default getList;