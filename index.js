const title = document.createElement('h1')
const today = document.createElement('h2')

const factDiv = document.createElement('div')
const catFact = document.createElement('h3')
const NewFactBtn = document.createElement('button')

const kitties = document.createElement('img')
const shoutOut = document.createElement('small')
const credit = document.createElement("a")

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

today.textContent = `📆 Today is ${new Date(Date.now()).toLocaleDateString(undefined, options)}`
title.innerText = "Here Is Your Daily Cat Fact:"
catFact.className = 'fact'
factDiv.className = 'container'
kitties.className = 'image'
NewFactBtn.className = 'btn'

kitties.src = "the-lucky-neko-uePn9YCTCY0-unsplash.jpg"
kitties.alt = "kittens on the floor"
shoutOut.textContent = 'Cute kitties pic by: '
credit.href =  "https://unsplash.com/es/@theluckyneko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
credit.textContent = "The Lucky Neko on Unsplash"

NewFactBtn.innerText = "\u{1F408} I'd Like A New Cat Fact, Please \u{1F408}"

factDiv.append(today, title, catFact, NewFactBtn)
document.body.prepend(kitties, factDiv)
document.querySelector('footer').append(shoutOut, credit)


const fetchMeme = async () => {
  const resp = await fetch('https://catfact.ninja/fact')
  const res = await resp.json()
  catFact.innerText = res.fact
}

NewFactBtn.addEventListener("click", fetchMeme)
NewFactBtn.addEventListener("touchstart", fetchMeme)

fetchMeme()



// TODO: cycle through a series of photos (3-4?)
// TODO: ask user for their favorite color and adjust header accordingly


