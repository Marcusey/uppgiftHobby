document.querySelector('#counter').innerHTML = `

  <div class="card">
    <button id="counter" type="button"></button>
  </div>

`
function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

setupCounter(document.querySelector('#counter'))
