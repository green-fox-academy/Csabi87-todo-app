function printUserManual() {
    console.log('Parancssori Todo applikáció \n ============================= \n Parancssori argumentumok: \n -l   Kilistázza a feladatokat \n -a   Új feladatot ad hozzá \n -r   Eltávolít egy feladatot \n -c   Teljesít egy feladatot ');
}

function printErrorOnEmptyInput() {
    console.log('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat')
}

export { printUserManual, printErrorOnEmptyInput };