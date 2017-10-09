// define the projects array, which will become the database
let projects = []

// define the entries for the blog
const project1 = {
    "name": "Personal Site",
    "description": "Developing a personal website to capture projects, provide methods of contact, show experiences, and provide readers access to a personal blog.",
    "projectNum": 1,
    "technologies": "Basic HTML and CSS to display and navigate webpages dedicated to Home, Projects, Resume, and Blog. JavaScript Arrays, Objects and JSON to capture data from pages and store it in the browser",
    "team": "N/A",
    "completeDate": "Actively Working"
}

const project2 = {
    "name": "",
    "description": "",
    "projectNum": 2,
    "technologies": "",
    "team": "N/A",
    "completeDate": ""
}

// populate projects database with enties
projects.push(project1)

// convert projects database into string saved in browser memory
const projectsString = JSON.stringify(projects)
localStorage.setItem("projects", projectsString)
