import minimist from 'minimist';
import fs from 'fs';
import { printUserManual, printErrorOnEmptyInput } from './usermessages.js';
import getList from './getlist.js';
import addToList from './addtolist.js';

const args = minimist(process.argv);

if (Object.keys(args).length === 1) {
    printUserManual();
} else if (args._.length > 2 || !Object.keys(args).every(arg => ['_', 'l', 'a', 'r', 'c'].includes(arg))) {
    printUserManual();
}

if (args.l === true) {
    getList(); // ha kap valamilyen paramétert az -l arg akkor legyen hibaüzenet
}

if (typeof args.a === 'string') {
    addToList(args.a);
} else if (args.a === true) {
    printErrorOnEmptyInput();
}

// Code comment:
// fájlból többször is kiolvasunk, mi lenne ha ez egyszer szerepelne?
// ha át kell írnunk a fájlt amiben tárolunk akkor egy helyen kell
// pl. egy config fájl ami tárolja a fájlt

// todo-hoz kapcsolódó functions legyenek egy moduleban