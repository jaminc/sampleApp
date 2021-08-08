window.addEventListener('DOMContentLoaded', async () => {
  console.log('App.js code');

  const users = await fetch('/users')
    .then(response => response.json())

  const containerEl = document.getElementById('js-container')
  const newContentEl = document.createElement('div')

  newContentEl.innerText = `
  This was added on the client side
  These are the users ${users[0].firstName}
  `
  containerEl.append(newContentEl)
})