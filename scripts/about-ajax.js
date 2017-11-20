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
