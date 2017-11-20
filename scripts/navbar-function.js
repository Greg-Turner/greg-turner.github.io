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
