// convert contact database string into database object
const contactDatabase = JSON.parse(localStorage.getItem("contacts"))

// identify the element that the contact will be posted in HTML
const contactElement = document.getElementById("contact")

contactElement.innerHTML += `
<h1>Follow me at:</h1>
<ul>
`
    // need to cycle through the weeks in the contactDatabase
    for (let i = 0; i < contactDatabase.length; i++) {
        let contactProperty = contactDatabase[i];

        //need to post week & title of contactProperty's contact in HTML of contact page
        contactElement.innerHTML += `
        <li class="noStyle">${contactProperty.icon} ${contactProperty.service} ${contactProperty.url}</li>
        `
    }

contactElement.innerHTML += `
</ul>
`
