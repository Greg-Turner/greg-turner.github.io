// define the contacts array, which will become the database
let contacts = []

// define the entries for the contacts
const linkedIn = {
    "service": "LinkedIn",
    "identity": "greg-turner",
    "url": "https://www.linkedin.com/in/greg-turner-5007a45",
}

const faceBook = {
    "service": "FaceBook",
    "identity": "GregTurner.IT.Hero",
    "url": "https://www.facebook.com/GregTurner.IT.Hero",
}


// populate contacts database with enties
contacts.push(linkedIn)
contacts.push(faceBook)

// convert contacts database into string saved in browser memory
const contactsString = JSON.stringify(contacts)
localStorage.setItem("contacts", contactsString)
