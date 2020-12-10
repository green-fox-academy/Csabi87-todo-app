import minimist from 'minimist';
import fs from 'fs';
import printUserManual from './usermanual.js';

const args = minimist(process.argv);


if (Object.keys(args).length === 1) {
    printUserManual();
} else if (args._.length > 2 || !Object.keys(args).every(arg => ['_', 'l', 'a', 'r', 'c'].includes(arg))) {
    // throw Error('invalid option');
    printUserManual();
}