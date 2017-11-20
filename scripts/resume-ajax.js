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
