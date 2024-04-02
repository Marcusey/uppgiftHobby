function setupCounter(element) {
  let counter = 0

  const updateCounterDisplay = () => {
    element.textContent = `count is ${counter}`
  }

  const incrementCounter = () => {
    counter++
    updateCounterDisplay()
  }

  element.addEventListener('click', incrementCounter)
  updateCounterDisplay()
}

setupCounter(document.querySelector('#counter'))
