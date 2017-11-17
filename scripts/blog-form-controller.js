// convert blog database string into database object or empty object if null
const gTurnerDbase = JSON.parse(localStorage.getItem('gTurnerDbase')) || {}

// Create blog key if it doesn't exist
gTurnerDbase.blogs = gTurnerDbase.blogs || []

// Sort the blog by their entryId property from largest (most recent) to smallest (oldest)
// gTurnerDbase.blog.sort((p, n) => n.entryId - p.entryId)

// Generator function creating a unique ID to add to the new Blog entry but starting from the most current one
const entryIdGenerator = function * (last) {
  let blogId = 1
  while (true) {
    yield last + blogId
    blogId++
  }
}

// pull the entryID property value from the last blog in the blog array within the gTurnerDbase object
const recentEntryId = gTurnerDbase.blogs[(gTurnerDbase.blogs.length - 1)] || { entryId: 0 }
const newEntryId = entryIdGenerator(recentEntryId.entryId)

// Factory function creating an object of the new Blog entry
const newBlogEntry = function (entryTitle, entryMonth, entryContent) {
  return Object.create(null, {
    'entryId': {
      value: newEntryId.next().value,
      enumerable: true
    },
    'title': {
      value: entryTitle,
      enumerable: true
    },
    'month': {
      value: entryMonth,
      enumerable: true
    },
    'content': {
      value: entryContent,
      enumerable: true
    }
  })
}

// Add event listener (click) to the submit button
document.getElementById('blogEntryForm__submitButton').addEventListener('click', event => {
  // Create a new Blog entry object
  const newEntry = newBlogEntry(
    document.querySelector("input[name='blogEntryForm__title']").value,
    document.querySelector("input[name='blogEntryForm__month']").value,
    document.querySelector("textarea[name='blogEntryForm__content']").value
  )

  // Add the newEntry object to the blogs array
  gTurnerDbase.blogs.push(newEntry)

  // convert blog database into string saved in browser memory
  localStorage.setItem('gTurnerDbase', JSON.stringify(gTurnerDbase))

  // clear the fields on the HTML page
  document.querySelector("input[name='blogEntryForm__title']").value = ''
  document.querySelector("input[name='blogEntryForm__month']").value = ''
  document.querySelector("textarea[name='blogEntryForm__content']").value = ''

  // put the focus back in the title field
  document.querySelector("input[name='blogEntryForm__title']").focus()
})
