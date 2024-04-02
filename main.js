function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `you made number ${counter} be counted`
  }

  const incrementCounter = () => {
    counter++
    updateCounterDisplay()
  }

  element.addEventListener('click', incrementCounter)
  updateCounterDisplay()
}

setupCounter(document.querySelector('#counter'))
