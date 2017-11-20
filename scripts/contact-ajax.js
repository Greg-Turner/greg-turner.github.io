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
