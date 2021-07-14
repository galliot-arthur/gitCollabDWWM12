let notes = [0, 12, 10, 9, 15, 18]

function moyenneNotes(notes) {
    sum=0
    for (let i=0; i< notes.length; i++) {
        sum += notes[i];
    }
    moyenne = sum/notes.length
    return moyenne
}

console.log(moyenneNotes(notes))

