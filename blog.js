function readBlog(entry) {
    var x = document.getElementById(entry);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// define the blog array, which will become the database
let blog = []

// define the entries for the blog
const week1 = {
    "title": "The joy of swimming when the floodgates open...",
    "weekNo": "1",
    "month": "October 2017",
    "content": "When I entered the first week of intense software development training at Nashville Software School, I fully expected to be thrown into the proverbial deep end. Hell, I joyfully donned my swimming trunks of Treehouse pre-work and gracefully dove in. Within the first couple days, in addition to HTML, CSS, and JavaScript basics, I was introduced to the wonders of utilizing Visual Studio Code, GitBash, Git commands, and GitHub. I must confess the idea of logging coding on a timeline log of git branches wins from me a hearty HUZZAH! Then the current of coding knowledge flowing from Steve and Meg began to pick up and my swim pace was pushed up a notch. To insure I firmly grasped every new topic, I committed myself to completing every JavaScript practice exercise at the end of each chapter. These were excellent! Just when I thought I was a rock star, or Olympic swimmer if I stay true to my metaphor, Steve introduced us to ticketing in GitHub. My Excel sheet-organized, flow chart-loving, side of me was doing the happy-dance! But wait... seven tickets seemed a little much all at once, don't you think? By the end of the week, the JavaScript concepts of arrays and objects, which were familiar to me, had been amped up with the JSON command, allowing me to convert a database of objects into a string, aka. stringify, which can be stored in a browser's memory. Fascinating stuff! Nearing the end of the last day of my first week at NSS, I completed the exercise on storing in browser memory. With only a little time remaining in the day, I found myself submerged by new tickets augmenting my already sizable queue. I have a feeling the floodgates in the dam holding back the workload will remain open for the next six months. Who needs rest and relaxation on the weekend? Bring on the tickets!"
}

const week2 = {
    "title": "",
    "weekNo": "2",
    "month": "October 2017",
    "content": ""
}

const week3 = {
    "title": "",
    "weekNo": "3",
    "month": "October 2017",
    "content": ""
}

const week4 = {
    "title": "",
    "weekNo": "4",
    "month": "October 2017",
    "content": ""
}

const week5 = {
    "title": "",
    "weekNo": "5",
    "month": "November 2017",
    "content": ""
}

// populate blog database with enties
blog.push(week1)

// convert blog database into string saved in browser memory
const blogString = JSON.stringify(blog)
localStorage.setItem("blog", blogString)
