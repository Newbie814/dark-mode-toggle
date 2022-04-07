const toggleDark = document.querySelector('.btn')
const articlesContainer = document.querySelector('.articles')

const articlesDatabase = articles.map((article) => {
  const { title, date, length, preview} = article

  return `
  <article class="post">
           <h2>${title}</h2>
           <div class="post-info">
             <span>${date}</span>
             <span>${length} min read</span>
           </div>
           <p>${preview}</p>
         </article>`
})
.join('')

toggleDark.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')


})

articlesContainer.innerHTML = articlesDatabase



