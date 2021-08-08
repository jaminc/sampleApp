import './styles/main.scss'

window.addEventListener('DOMContentLoaded', () => {
  console.log('App.js code');

  fetch('/users')
    .then(response => response.json())
    .then(users => {
      const containerEl = document.getElementById('js-container')
      const newContentEl = document.createElement('div')

      newContentEl.innerText = `
        This was added on the client side
        These are the users ${users[0].firstName}
      `
      containerEl.append(newContentEl)
    })
})

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)