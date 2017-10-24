// Given a user visits your blog page
// When the page loads
// Then the user should see the first 5 articles of your blog
// And there should be numbered pagination links at the bottom of the page 
// so the user can view subsequent sets of five articles

// convert blog database string into database object
const BlogDatabase = JSON.parse(localStorage.getItem("blog"))

const totalEntries = BlogDatabase.length
const entriesPerPage = 5
const numberOfPages = Math.ceil(totalEntries / entriesPerPage)
const paginationEl = document.getElementById("entryPaginator")
const entryEl = document.getElementsByClassName("week")[0]

// Build the DOM string for the pagination links in the footer
let paginationString = "<ul class='noStyle'>"
paginationString += "<a id='previous' href='#'>&lt;</a>"
for (let i = 0; i < numberOfPages; i++) {
    paginationString += ` <li><a class="entryPage page-${i+1}" href="#">${i+1}</a></li>`
}
paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
paginationString += "</ul>"

// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous")
const nextEl = document.getElementById("next")

/*
    Function that will be invoked each time the user clicks
    on one of the pagination links at the bottom of the page
*/
function produceBlogEntries (event) {
    // Clear the blog entries first before displaying the new ones
    entryEl.innerHTML = ""

    // Which number did the user click on?

    // Convert DOMTokenList to Array
    const classes = event.target.classList
    const classArray = Array.from(classes)

    // Find the class we want that match pattern "page-n"
    const targetClass = classArray.find(flag => {
        if (flag.startsWith("page-")) return flag
    })

    // Split the class into an array on the dash
    const pageNumberArray = targetClass.split("-")

    // Get the actual page number ["page", "1"]
    const actualPageNumber = pageNumberArray[1]

    // Convert the string into an integer
    const integerPageNumber = parseInt(actualPageNumber)

    const pageNumber = parseInt(
        Array.from(event.target.classList)
        .find(flag => {
            if (flag.startsWith("page-")) return flag
        })
        .split("-")[1]
    )

    // Change the class name of the previous arrow
    if ((pageNumber - 1) === 0) {
        previousEl.style.display = "none"
    } else {
        previousEl.style.display = "inline"
        previousEl.className = `page-${pageNumber - 1}`
    }

    // Change the class name of the next arrow
    if ((pageNumber + 1) > numberOfPages) {
        nextEl.style.display = "none"
    } else {
        nextEl.style.display = "inline"
        nextEl.className = `page-${pageNumber + 1}`
    }

    // Determine which entries to display by slicing the array
    const entriesToDisplay =  BlogDatabase.slice(
        (pageNumber - 1) * entriesPerPage, 
        pageNumber * entriesPerPage
    )

    // Display a <section> representation of each data object
    for (let i = 0; i < entriesToDisplay.length; i++) {
        let currentEntry = entriesToDisplay[i];
        entryEl.innerHTML += `
        <br>
        <article class="week{$i}">
            <div class="label">${currentEntry.month} Week ${currentEntry.weekNo}: ${currentEntry.title}</div>
            <br><br>
            <p>${currentEntry.content}</p>

        </article>
        `
    }
}

// Get the array of pagination anchor tags we added to the DOM
const entryLinks = document.getElementsByClassName("entryPage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < entryLinks.length; j++) {
    let thisEntryEl = entryLinks[j];
    thisEntryEl.addEventListener("click", produceBlogEntries, false);
}

produceBlogEntries({
    "target": {
        "classList": ["page-1"]
    }
})

previousEl.addEventListener("click", produceBlogEntries)
nextEl.addEventListener("click", produceBlogEntries)
