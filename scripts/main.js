
require('./about-ajax')
// const adminAjax = require('./admin-ajax')
// const blogAjax = require('./blog-ajax')
require('./contact-ajax')
// const navigationBar = require('./navbar')
// const paginationAjax = require('./pagination-ajax')
// const projectsAjax = require('./projects-ajax')
require('./resume-ajax')
const navbarRevealSection = require('./navbar-reveal-section')
const navbarEl = document.getElementById('navbar')
let activeSection = 'about'

navbarEl.innerHTML = `
    <ul class="navigate">
            <li class="noStyle" class="navButton"><a id='aboutLink' href='#'>Main</a></li>
            <li class="noStyle" class="navButton"><a id='blogLink' href='#'>Blog</a></li>
            <li class="noStyle" class="navButton"><a id='projectsLink' href='#'>Projects</a></li>
            <li class="noStyle" class="navButton"><a id='resumeLink' href='#'>Resume</a></li>
            <li class="noStyle" class="navButton"><a id='contactLink' href='#'>Contact</a></li>
            <li class="noStyle" class="navButton"><a id='adminLink' href='#'>Admin Login</a></li>
            `
document.getElementById('aboutLink').addEventListener('click', navbarRevealSection('aboutLink', activeSection))
document.getElementById('adminLink').addEventListener('click', navbarRevealSection('adminLink', activeSection))
document.getElementById('blogLink').addEventListener('click', navbarRevealSection('blogLink', activeSection))
document.getElementById('contactLink').addEventListener('click', navbarRevealSection('contactLink', activeSection))
document.getElementById('projectsLink').addEventListener('click', navbarRevealSection('projectsLink', activeSection))
document.getElementById('resumeLink').addEventListener('click', navbarRevealSection('resumeLink', activeSection))
