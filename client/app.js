window.addEventListener('DOMContentLoaded', async () => {
  console.log('App.js code');

  const users = await fetch('/users')
    .then(response => response.json())

  const containerEl = document.getElementById('js-container')
  const newContentEl = document.createElement('div')

  newContentEl.innerText = `These are the users ${users[0].firstName}`
  containerEl.append(newContentEl)
})