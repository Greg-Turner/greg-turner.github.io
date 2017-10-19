const totalItems = CheeseDatabase.length
const itemsPerPage = 1
const numberOfPages = Math.ceil(totalItems/itemsPerPage 
const paginationEl = document.getElementById("cheesePaginator")

let paginationString = "<ul>"

for (var i=0; i<= numberOfPages; i++) {
    paginationString += `
    <li>${i+1}</li>
    `
}



paginationString += "</ul>"

paginationEl.innerHTML = paginationString

function produceCheese (pageNumber = 1) {
    const itemsToDisplay = CheeseDatabase.slice(
        (pageNumber-1) * itemsPerPage,
        pageNumber * itemsPerPage
    )
    for (var i = 0; i < itemsToDisplay.length; i++) {
        let currentCheese = itemsToDisplay[i];
        cheeseEl.innerHTML += `
            <section>
                <h1>${currentCheese.type}</h1>
                <h2>Is t smelly? ${currentCheese.smelly}</h2>
                <h2>It is ${currentCheese.consistency} to touch.</h2>
            </section>
    }
}