// convert resume database string into database object
const resumeDatabase = JSON.parse(localStorage.getItem('resume'))

// identify the element that the resume will be posted in HTML
const workElement = document.getElementById('workExp')

// identify the element that the resume will be posted in HTML
const certElement = document.getElementById('certs')

// identify the element that the resume will be posted in HTML nnn
const eduElement = document.getElementById('education')

// need to cycle through the properties of the resumeDatabase (keys)
for (let key in resumeDatabase) {
  // const resumeProperty = resumeDatabase.key;

  // if key is job
  if (key === 'job') {
    let resumeProperty = resumeDatabase[key]
    // inject work section heading into HTML of page
    workElement.innerHTML += `
        <div id="label">Technical Work Experience:</div>
            <ul>
        `
    // need to cycle through the arrays (index) that make up the properties in the resumeDatabase
    for (let i = 0; i < resumeProperty.length; i++) {
      let workEntry = resumeProperty[i]
      // need to cycle through the properties of the jobs within the arrays within the object
      // for (let job in workEntry) {
      // let post = workEntry.job;
      workElement.innerHTML += `
                <li class="noStyle">${workEntry.startDate}-${workEntry.endDate} ${workEntry.name}, ${workEntry.location} [${workEntry.title}]</li>
                `
      // }
    }
    workElement.innerHTML += `
        </ul>
        `
    // if key is cert
  } else if (key === 'cert') {
    let resumeProperty = resumeDatabase[key]
    // inject cert section heading into HTML of page
    certElement.innerHTML += `
        <div id="label">Certifications:</div>
            <ul>
        `
    // need to cycle through the arrays (index) that make up the properties in the resumeDatabase
    for (let i = 0; i < resumeProperty.length; i++) {
      let certEntry = resumeProperty[i]

      // need to cycle through the properties of the certs within the arrays within the object
      // for (let certa in certEntry) {
      // let post = certEntry.cert;
      certElement.innerHTML += `
                <li class="noStyle">(${certEntry.endDate}) ${certEntry.name} ${certEntry.title}</li>
                `
    }

    certElement.innerHTML += `
        </ul>
        `
    // key must be edu
  } else {
    let resumeProperty = resumeDatabase[key]
    // inject education section heading into HTML of page
    eduElement.innerHTML += `
        <div id="label">Education:</div>
            <ul>
        `
    // need to cycle through the arrays (index) that make up the properties in the resumeDatabase
    for (let index = 0; index < resumeProperty.length; index++) {
      let eduEntry = resumeProperty[index]

      // need to cycle through the properties of the certs within the arrays within the object
      // for (let schools in eduEntry) {
      // let school = eduEntry.edu;
      eduElement.innerHTML += `
                <li class="noStyle">(${eduEntry.endDate}) ${eduEntry.name}, ${eduEntry.location}<br>${eduEntry.title}<br>${eduEntry.comment}</li>
                `
    }
  }
  eduElement.innerHTML += `
        </ul>
        `
}
