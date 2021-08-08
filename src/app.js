import './styles/main.scss'
import template from './templates/test.hbs'

window.addEventListener('DOMContentLoaded', () => {
  console.log('App.js code');

  fetch('/users')
    .then(response => response.json())
    .then(users => {
      const containerEl = document.getElementById('js-container')

      containerEl.innerHTML = template({ users })
    })
})

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)