// convert blog database string into database object
const BlogDatabase = JSON.parse(localStorage.getItem("blog"))

// identify the element that the blog will be posted in HTML
const blogElement = document.getElementsByClassName("week")[0]

    // need to cycle through the weeks in the BlogDatabase
    for (let i = 0; i < BlogDatabase.length; i++) {
        let blogWeekProperty = BlogDatabase[i];

        //need to post week & title of blogWeekProperty's blog in HTML of blog page
        blogElement.innerHTML += `
        <br>
        <article class="week{$i}">
            <div class="label">${blogWeekProperty.month} Week ${blogWeekProperty.weekNo}: ${blogWeekProperty.title}</div>
            <br><br>
            <p>${blogWeekProperty.content}</p>

        </article>
        `
    }