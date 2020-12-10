import fs from 'fs';

function addToList(input) {
    let newToDo = input;
    fs.writeFileSync('./list.txt', newToDo)
}

export default addToList;