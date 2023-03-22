const title = document.createElement('h1')
const today = document.createElement('h2')

const factDiv = document.querySelector('.container')
const catFact = document.createElement('p')
const NewFactBtn = document.createElement('span')
const NewCatImgBtn = document.createElement('span')
const factIcon = document.createElement('span')
const imgIcon = document.createElement('span')
const kitties = document.querySelector('.image')
const shoutOut = document.createElement('small')
const credit = document.createElement("a")

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

today.textContent = `📆 Today is ${new Date(Date.now()).toLocaleDateString(undefined, options)}`
title.innerText = "Here Is Your Daily Cat Fact:"
catFact.className = 'fact'
NewFactBtn.classList.add('btn', 'text')
NewCatImgBtn.classList.add('btn', 'text')
factIcon.classList.add('btn', 'icon')
imgIcon.classList.add('btn', 'icon')

kitties.src = "assets/the-lucky-neko-uePn9YCTCY0-unsplash.jpg"
kitties.alt = "kittens on the floor"
shoutOut.textContent = 'Cute cat pics from '
credit.href =  "https://unsplash.com/"
credit.textContent = "the Unsplash API"

NewFactBtn.innerText = "\u{1F9E0} I'd Like A New Cat FACT, Please \u{1F9E0}"
NewCatImgBtn.innerText = "\u{1F408} I'd Like A New Cat IMAGE, Please \u{1F408}"
factIcon.innerText = "\u{1F9E0} CAT FACT"
imgIcon.innerText = "\u{1F408} CAT IMAGE"

factDiv.prepend(today, title, catFact, NewFactBtn, NewCatImgBtn, factIcon, imgIcon)
document.querySelector('footer').append(shoutOut, credit)


// using netlify function to fetch unsplash img

// NOTE: the configuration of this fetch will not work if you're not using netlify to deploy but the solution for this is simple. make sure you get an API Key from Unsplash (hide/save it to a separate config file), comment out line 43 and replace it with a fetch request to unsplash that interpolates your API key.
const fetchCatPic = async () => {
  const resp = await fetch('/.netlify/functions/fetch-unsplash')
  const result = await resp.json()
  kitties.src = result.message.urls.small
  kitties.alt = result.message.alt_description
}


const fetchMeme = async () => {
  const resp = await fetch('https://catfact.ninja/fact')
  const res = await resp.json()
  catFact.innerText = res.fact
}

NewFactBtn.addEventListener("click", fetchMeme)
NewFactBtn.addEventListener("touchstart", fetchMeme, {passive: true})
factIcon.addEventListener("click", fetchMeme)
factIcon.addEventListener("touchstart", fetchMeme,{passive: true})

NewCatImgBtn.addEventListener("click", fetchCatPic)
NewCatImgBtn.addEventListener("touchstart", fetchCatPic,{passive: true})
imgIcon.addEventListener("click", fetchCatPic)
imgIcon.addEventListener("touchstart", fetchCatPic,{passive: true})

fetchMeme()


