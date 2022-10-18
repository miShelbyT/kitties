// 'use strict';
const factDiv = document.createElement('div')
const title = document.createElement('h2')
const catFact = document.createElement('h3')
const kitties = document.createElement('img')
const newFact = document.createElement('button')
const today = new Date(Date.now())
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

title.innerText = `📆 Today is:
${today.toLocaleDateString(undefined, options)}
Here Is Your Daily Cat Fact:`
catFact.className = 'fact'
factDiv.className = 'container'
kitties.className = 'image'
newFact.className = 'btn'

kitties.src = "https://thumbs.dreamstime.com/b/moggie-kittens-28062021.jpg"
kitties.alt = "kittens in cups"

newFact.innerText = "I'd Like A New Cat Fact, Please"

factDiv.append(title, catFact, newFact)
document.body.append(kitties, factDiv)


const fetchMeme = async () => {
  const resp = await fetch('https://catfact.ninja/fact')
  const res = await resp.json()
  catFact.innerText = res.fact
}

newFact.addEventListener("click", fetchMeme)

fetchMeme()






