// define the contacts array, which will become the database
let contacts = []

// define the entries for the contacts
const linkedIn = {
    "service": "LinkedIn",
    "identity": "greg-turner",
    "url": "<a href='https://www.linkedin.com/in/greg-turner-5007a45'>linkedin.com/in/greg-turner-5007a45</a>",
    "icon": "<img src='../images/Linkedin.png' alt='linkedin' width=54>"
}

const faceBook = {
    "service": "FaceBook",
    "identity": "GregTurner.IT.Hero",
    "url": "<a href='https://www.facebook.com/GregTurner.IT.Hero'>facebook.com/GregTurner.IT.Hero</a>",
    "icon": "<img src='../images/facebook.png' alt='facebook' width=56>"
}

const gitHub = {
    "service": "GitHub",
    "identity": "Greg-Turner",
    "url": "<a href='https://github.com/Greg-Turner'>github.com/Greg-Turner</a>",
    "icon": "<img src='../images/Github-icon.png' alt='github' width=54>"
}

const email = {
    "service": "email",
    "identity": "gmail",
    "url": "<a href='mailto:greg.turner.it.hero@gmail.com'>Send Email</a>",
    "icon": "<img src='../images/email.png' alt='email' width=54>"
}


// populate contacts database with enties
contacts.push(gitHub)
contacts.push(linkedIn)
contacts.push(faceBook)
contacts.push(email)


// convert contacts database into string saved in browser memory
const contactsString = JSON.stringify(contacts)
localStorage.setItem("contacts", contactsString)
