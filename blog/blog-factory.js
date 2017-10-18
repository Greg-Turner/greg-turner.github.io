// define the blog array, which will become the database
let blog = []

// define the entries for the blog
const week1 = {
    "title": "The joy of swimming when the floodgates open...",
    "weekNo": "1",
    "month": "October 2017",
    "content": "When I entered the first week of intense software development training at Nashville Software School, I fully expected to be thrown into the proverbial deep end. Hell, I joyfully donned my swimming trunks of Treehouse pre-work and gracefully dove in. Within the first couple days, in addition to HTML, CSS, and JavaScript basics, I was introduced to the wonders of utilizing Visual Studio Code, GitBash, Git commands, and GitHub. I must confess the idea of logging coding on a timeline log of git branches wins from me a hearty HUZZAH!<br><br> Then the current of coding knowledge flowing from Steve and Meg began to pick up and my swim pace was pushed up a notch. To insure I firmly grasped every new topic, I committed myself to completing every JavaScript practice exercise at the end of each chapter. These were excellent! Just when I thought I was a rock star, or Olympic swimmer if I stay true to my metaphor, Steve introduced us to ticketing in GitHub. My Excel sheet-organized, flow chart-loving, side of me was doing the happy-dance! But wait... seven tickets seemed a little much all at once, don't you think?<br><br> By the end of the week, the JavaScript concepts of arrays and objects, which were familiar to me, had been amped up with the JSON command, allowing me to convert a database of objects into a string, aka. stringify, which can be stored in a browser's memory. Fascinating stuff!<br><br> Nearing the end of the last day of my first week at NSS, I completed the exercise on storing in browser memory. With only a little time remaining in the day, I found myself submerged by new tickets augmenting my already sizable queue. I have a feeling the floodgates in the dam holding back the workload will remain open for the next six months.<br><br> Who needs rest and relaxation on the weekend? Bring on the tickets!"
}

const week2 = {
    "title": "First group project",
    "weekNo": "2",
    "month": "October 2017",
    "content": "This week we were separated into groups and given a group project of creating a company website. I was responsible for creationg a page with methods of contacting the company, such as following various social media pages, direct contact medthods like phone and address, and retailers who sell our merchandice. I also developed the footer to go on all the pages in the site."
}

const week3 = {
    "title": "Another group project",
    "weekNo": "3",
    "month": "October 2017",
    "content": "Immediately on the heels of last week's project, we were once again divided into new groups and given a similar company website project. In an effort to challenge ourselves, we embarked on creating a database that is passed between the pages and supplemented with new data... a shopping cart of a sort. Fortunately, a question directed to Steve gave him the opportunity to shoot down our idea as not being part of the scope of what the project owner (himself) wanted from our group. Quite a bit of time and effort was scrapped and we scrambled to regroup. A day before the delivery, Steve surprised us with a twist requirement of paginated products. This resulted in our dropping work on anything but the pagination. This project was delivered having successfully met the requirements but without much polish at all."
}


// populate blog database with enties
blog.push(week1)
blog.push(week2)
blog.push(week3)

// convert blog database into string saved in browser memory
const blogString = JSON.stringify(blog)
localStorage.setItem("blog", blogString)
