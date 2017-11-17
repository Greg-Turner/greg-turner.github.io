/* eslint-env jquery */
/* eslint-env es6 */
// declare a variable to contain the following

$(document).ready(function () {
  const contactEl = $('#contact')
  let finalHTML = `
    <h1>Follow me at:</h1>
    <ul>
    `
  $.ajax({
    'url': './../contact/contact.json',
    'method': 'GET'

  }).then(contactData => {
    let contactArray = contactData.contacts
    contactArray.forEach(contact => {
      finalHTML += `
              <li class="noStyle">${contact.icon} ${contact.service} ${contact.url}</li>
              `
    })
    finalHTML += `
    </ul>
    `
  })
  contactEl.html(finalHTML)
})
