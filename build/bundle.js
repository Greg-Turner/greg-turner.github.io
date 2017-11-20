(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const aboutEl = $('#about')
  let aboutHTML = ``
  $.ajax({
    'url': 'https://personal-site-b59b7.firebaseio.com/about.json',
    'method': 'GET'

  }).then(aboutData => {
    let aboutArray = aboutData
    aboutArray.forEach(about => {
      aboutHTML += `
            <h1>${about.pic} ${about.name}</h1>
                <p>${about.background}</p>
                `
    })
    aboutEl.html(aboutHTML)
  })
})

},{}],2:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const contactEl = $('#contact')
  let contactHTML = `
      <h1>Follow me at:</h1>
      <br>
      `
  $.ajax({
    'url': 'https://personal-site-b59b7.firebaseio.com/contacts.json',
    'method': 'GET'

  }).then(contactData => {
    let contactArray = contactData
    contactArray.forEach(contact => {
      contactHTML += `
      <a href="${contact.url}" target="_blank">${contact.icon}</a> ---- 
      `
    })
    contactHTML += `
    </br>
    `
    contactEl.html(contactHTML)
  })
})

},{}],3:[function(require,module,exports){

require('./about-ajax')
require('./contact-ajax')
require('./resume-ajax')
const navigationBar = require('./navbar-dom')
require('./navbar-function')
navigationBar()

},{"./about-ajax":1,"./contact-ajax":2,"./navbar-dom":4,"./navbar-function":5,"./resume-ajax":6}],4:[function(require,module,exports){

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

},{"./navbar-function":5}],5:[function(require,module,exports){
const navbar = Object.create(null, {
  'hide': {
    value: function (sectionToHide) {
      document.getElementById(sectionToHide).classList.add('hidden')
    }
  },
  'reveal': {
    value: function (sectionToReveal) {
      document.getElementById(sectionToReveal).classList.remove('hidden')
    }
  }
})
module.exports = navbar

},{}],6:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const resumeEl = $('#resume')
  let resumeHTML = `
        <h1>Experience</h1>
        <h3>Work History:</h3>
        <ul>
        `
  $.ajax({
    'url': 'https://personal-site-b59b7.firebaseio.com/experience.json',
    'method': 'GET'

  }).then(resumeData => {
    let experienceArray = resumeData
    let experienceCategory = 'job'
    experienceArray.forEach(experience => {
      if (experience.category !== experienceCategory && experience.category === 'cert') {
        experienceCategory = experience.category
        resumeHTML += `
            </ul>
            <h3>Certifications:</h3>
            <ul>
            `
      } else if (experience.category !== experienceCategory && experience.category === 'edu') {
        experienceCategory = experience.category
        resumeHTML += `
            </ul>
            <h3>Education:</h3>
            <ul>
            `
      } else {
        resumeHTML += `
        <br>
          `
      }
      resumeHTML += `
                  <li class="noStyle">${experience.icon}  ${experience.name}  ${experience.location}  ${experience.startDate} - ${experience.endDate}</li>
                  <li class="noStyle">${experience.title}</li>
                  <li class="noStyle">${experience.comment}</li>
                  `
    })
    resumeHTML += `
        </ul>
        `
    resumeEl.html(resumeHTML)
  })
})

},{}]},{},[3]);
