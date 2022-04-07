const toggleDark = document.querySelector('.btn')

toggleDark.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
})