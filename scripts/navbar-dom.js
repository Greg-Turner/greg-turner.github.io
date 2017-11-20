
const navbar = require('./navbar-function')
const navbarEl = document.getElementById('navbar')
let activeSection = 'about'

const navigationBar = function () {
  navbarEl.innerHTML = `
    <ul class="navigate">
            <li class="noStyle" class="navButton"><a id='aboutLink' href='#'>Main</a></li>
            <li class="noStyle" class="navButton"><a id='blogLink' href='#'>Blog</a></li>
            <li class="noStyle" class="navButton"><a id='projectsLink' href='#'>Projects</a></li>
            <li class="noStyle" class="navButton"><a id='resumeLink' href='#'>Resume</a></li>
            <li class="noStyle" class="navButton"><a id='contactLink' href='#'>Contact</a></li>
            <li class="noStyle" class="navButton"><a id='adminLink' href='#'>Admin Login</a></li>
            `
  navbarEl.addEventListener('click', function (event) {
    console.log(event)
    let part = event.target.id
    let open = part.split('L')[0]

    navbar.hide(activeSection)
    navbar.reveal(open)
    activeSection = open
  })
}
module.exports = navigationBar
