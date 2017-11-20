const revealSection = function (item, activeSection) {
  document.getElementById(activeSection).classList.add('hidden')
  document.getElementById(item).classList.remove('hidden')
  activeSection = item
}

module.exports = revealSection
