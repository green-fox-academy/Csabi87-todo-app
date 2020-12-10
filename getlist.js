import fs from 'fs';

function getList() {
    let fileContent = fs.readFileSync('./list.txt').toString();
    if (fileContent.length === 0) {
        console.log('Nincs mára tennivalód! :)')
    }
    console.log(fileContent)
}

export default getList;