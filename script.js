const titlePage = document.getElementById('title')
const inputHome = document.getElementById('home')
const inputNews = document.getElementById('news')
const inputAbouth = document.getElementById('about')
const inputContact = document.getElementById('contact')

const menuItems = document.querySelectorAll('a[href^="#"]')

function getScrollByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetLeft
}

function scrollToPosition(to) {
    window.scroll({
        left: to,
        behavior: "smooth",
    })

    console.log(to)
}

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollByHref(event.target)

    scrollToPosition(to)
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function changeName(pageName){
    titlePage.innerText = pageName
}

function changePage(pageName, inputName){
    changeName(pageName)
    inputHome.classList.remove("checked")
    inputNews.classList.remove("checked")
    inputAbouth.classList.remove("checked")
    inputContact.classList.remove("checked")

    inputName.classList.add("checked")
}

inputHome.onclick = () => changePage('Home', inputHome)
inputNews.onclick = () => changePage('News', inputNews)
inputAbouth.onclick = () => changePage('Abouth', inputAbouth)
inputContact.onclick = () => changePage('Contact', inputContact)