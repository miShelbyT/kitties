import { API_KEY } from "./config.js"

const URL = `https://api.unsplash.com/photos/random?Accept-Version=v1&client_id=${API_KEY}&username=theluckyneko`

const title = document.createElement('h1')
const today = document.createElement('h2')

const factDiv = document.createElement('div')
const catFact = document.createElement('h3')
const NewFactBtn = document.createElement('span')
const NewCatImgBtn = document.createElement('span')
const factIcon = document.createElement('span')
const imgIcon = document.createElement('span')

const shoutOut = document.createElement('small')
const credit = document.createElement("a")

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

today.textContent = `📆 Today is ${new Date(Date.now()).toLocaleDateString(undefined, options)}`
title.innerText = "Here Is Your Daily Cat Fact:"
catFact.className = 'fact'
factDiv.className = 'container'
NewFactBtn.classList.add('btn', 'text')
NewCatImgBtn.classList.add('btn', 'text')
factIcon.classList.add('btn', 'icon')
imgIcon.classList.add('btn', 'icon')


shoutOut.textContent = 'Cute cat pics from '
credit.href =  "https://unsplash.com/"
credit.textContent = "the Unsplash API"

NewFactBtn.innerText = "\u{1F9E0} I'd Like A New Cat FACT, Please \u{1F9E0}"
NewCatImgBtn.innerText = "\u{1F408} I'd Like A New Cat IMAGE, Please \u{1F408}"
factIcon.innerText = "\u{1F9E0} CAT FACT \u{1F9E0}"
imgIcon.innerText = "\u{1F408} CAT IMAGE \u{1F408}"

factDiv.append(today, title, catFact, NewFactBtn, NewCatImgBtn, factIcon, imgIcon)
document.body.prepend(factDiv)
document.querySelector('footer').append(shoutOut, credit)

const fetchCatPic = async () => {
  const resp = await fetch(URL)
  const result = await resp.json()
  const kitties = document.querySelector('.image')
  kitties.src = result.urls.small
  kitties.alt = result.alt_description

}


const fetchMeme = async () => {
  const resp = await fetch('https://catfact.ninja/fact')
  const res = await resp.json()
  catFact.innerText = res.fact
}

NewFactBtn.addEventListener("click", fetchMeme)
NewFactBtn.addEventListener("touchstart", fetchMeme)
factIcon.addEventListener("click", fetchMeme)
factIcon.addEventListener("touchstart", fetchMeme)

NewCatImgBtn.addEventListener("click", fetchCatPic)
NewCatImgBtn.addEventListener("touchstart", fetchCatPic)
imgIcon.addEventListener("click", fetchCatPic)
imgIcon.addEventListener("touchstart", fetchCatPic)

fetchMeme()
fetchCatPic()


