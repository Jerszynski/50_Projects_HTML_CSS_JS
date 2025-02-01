const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_image = document.getElementById('profile_image')
const namee = document.getElementById('name')
const date = document.getElementById('date')

const animated_backgrounds = document.querySelectorAll('.animated-background')
const animated_backgrounds_texts = document.querySelectorAll('.animated-background-text')

setTimeout(getData, 2500)

// you can put here API data 
function getData() {
    header.innerHTML = '<img class="header-img" src="https://i.redd.it/0wbflystge171.jpg" alt="">'
    title.innerHTML = 'Biorr, of the twin fangs'
    excerpt.innerHTML = 'Biorr of the Twin Fangs is the older member of the King’s elite duo known as the Twin Fangs. When the second-half, Vallarfax, fled the Kingdom and escaped the fog to warn the rest of the world of Boletaria’s plight, Biorr stayed behind to defend the honor of the True King Allant.'
    profile_image.innerHTML = '<img class="author-img" src="https://i.redd.it/0wbflystge171.jpg" alt="">'
    namee.innerHTML = 'Biorr'
    date.innerHTML = 'Feb 01, 2025'

    animated_backgrounds.forEach(bg => bg.classList.remove('animated-background'))
    animated_backgrounds_texts.forEach(bg => bg.classList.remove('animated-background-text'))
}