import fs from 'fs';

function getList() {
    let fileContent = fs.readFileSync('./list.txt').toString();
    if (fileContent.length === 0) {
        console.log('Nincs mára tennivalód! :)') //kiszervezhető a usermessage
    }
    console.log(fileContent)
}

export default getList;