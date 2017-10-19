// convert project database string into database object
const projectDatabase = JSON.parse(localStorage.getItem("projects"))

// identify the element that the project will be posted in HTML
const projectElement = document.getElementById("project")
console.log(projectDatabase)
    // need to cycle through the weeks in the projectDatabase
    for (let i = 0; i < projectDatabase.length; i++) {
        let projectProperty = projectDatabase[i];

        //need to post week & title of projectProperty's project in HTML of project page
        projectElement.innerHTML += `
        <br>
        <article class="project{$i}">
            <h2 class="label">${projectProperty.name}</h2>
            <p class="label">Description:</p>
            <p>${projectProperty.description}</p>
            <p class="label">Technologies:</p>
            <p>${projectProperty.technologies}</p>
            <p class="label">Team:</p>
            <p>${projectProperty.team}</p>
            <p class="label">Competion Date: ${projectProperty.completeDate}</p>
            
        </article>
        `
    }