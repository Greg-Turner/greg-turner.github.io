// define the projects array, which will become the database
let projects = []

// define the entries for the blog
const project1 = {
    "name": "Personal Site",
    "description": "Developing a personal website to capture projects, provide methods of contact, show experiences, and provide readers access to a personal blog.",
    "projectNum": 1,
    "technologies": "Basic HTML and CSS to display and navigate webpages dedicated to Home, Projects, Resume, and Blog. JavaScript Arrays, Objects and JSON to capture data from pages and store it in the browser",
    "team": "Individual effort",
    "completeDate": "Actively Working"
}

const project2 = {
    "name": "Company Website",
    "description": "Build a company website in which each page uses JavaScript to load data into a database and then into local storage then uses JavaScript to populate the HTML of the page with the database.",
    "projectNum": 2,
    "technologies": "Basic HTML and CSS; factory JavaScript page that loads a stringified database into local storage; controller JavaScript page that parses the local storage into a database then populates the data into the HTML of the page",
    "team": "Merciful Squids: Alexis, Kimmy, Greg T., John",
    "completeDate": "10/10/2017"
}

const project3 = {
    "name": "Company Website - Part Deux",
    "description": "Build a company website in which each page uses JavaScript to load data into a database and then into local storage then uses JavaScript to populate the HTML of the page with the database. One day before the due date, Steve added a twist requirement of the 20 products being paginated in groups of 4 by JavaScript.",
    "projectNum": 3,
    "technologies": "Basic HTML and CSS; factory JavaScript page that loads a stringified database into local storage; controller JavaScript page that parses the local storage into a database then populates the data into the HTML of the page; JavaScript pagination",
    "team": "Decisive Rhinos: Krys, Greg T., Garrett, Erin, Greg L.",
    "completeDate": "10/18/2017"
}

// populate projects database with enties
projects.push(project1)
projects.push(project2)
projects.push(project3)


// convert projects database into string saved in browser memory
const projectsString = JSON.stringify(projects)
localStorage.setItem("projects", projectsString)
