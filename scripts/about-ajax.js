/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const aboutEl = $('#about')
  let aboutHTML = ``
  $.ajax({
    'url': '../content/about-content.json',
    'method': 'GET'

  }).then(aboutData => {
    let aboutArray = aboutData.about
    aboutArray.forEach(about => {
      aboutHTML += `
            <h1>${about.pic} ${about.name}</h1>
                <p>${about.background}</p>
                `
    })
    aboutEl.html(aboutHTML)
  })
})
