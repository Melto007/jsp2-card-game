let cards = [
    {
        id: 1,
        name: 'astronaut1',
        image: './files/images/1000_F_434055036_mJuZ224jKI166R74dO9SmDEKsgksumrW.jpg'
    },{
        id: 2,
        name: 'astronaut2',
        image: './files/images/astronaut-floating-with-balloons-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3461.jpg'
    },{
        id: 3,
        name: 'astronaut3',
        image: './files/images/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg'
    },{
        id: 4,
        name: 'astronaut4',
        image: './files/images/astronaut-riding-rocket-cartoon-vector-icon-illustration_138676-3471.jpg'
    },{
        id: 5,
        name: 'astronaut5',
        image: './files/images/cute-astronaut-dabbing-cartoon-vector-icon-illustration_480044-21.jpg'
    },{
        id: 6,
        name: 'astronaut6',
        image: './files/images/cute-astronaut-holding-space-board-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5211.jpg'
    },{
        id: 7,
        name: 'astronaut1',
        image: './files/images/1000_F_434055036_mJuZ224jKI166R74dO9SmDEKsgksumrW.jpg'
    },{
        id: 8,
        name: 'astronaut2',
        image: './files/images/astronaut-floating-with-balloons-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3461.jpg'
    },{
        id: 9,
        name: 'astronaut3',
        image: './files/images/astronaut-listening-music-with-headphone-peace-hand-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3375.jpg'
    },{
        id: 10,
        name: 'astronaut4',
        image: './files/images/astronaut-riding-rocket-cartoon-vector-icon-illustration_138676-3471.jpg'
    },{
        id: 11,
        name: 'astronaut5',
        image: './files/images/cute-astronaut-dabbing-cartoon-vector-icon-illustration_480044-21.jpg'
    },{
        id: 12,
        name: 'astronaut6',
        image: './files/images/cute-astronaut-holding-space-board-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5211.jpg'
    }
]

let container = document.querySelector('.container')
let section1 = document.querySelector('.section-1')
let section2 = document.querySelector('.section-2')
let startBtn = document.querySelector('.start-btn')
let score = 0
let attempt = 0

let totalCards = []
let selectedCards = []

function createGrid() {
    let totalGrid = cards.length

    for(let index = 0; index < totalGrid; index++) {
        let grid = document.createElement('div')
        let img = document.createElement('img')
        grid.setAttribute('class','grid')
        img.setAttribute('src', './files/images/thinking-get-started-with-marketing-for-new-retail-business-owners-8.png')
        img.setAttribute('alt', 'images')
        img.setAttribute('data-id', index)
        img.addEventListener('click', flippingCards)
        container.appendChild(grid)
        grid.appendChild(img)
    }
}

function startGame() {
    section2.style.display = 'none'
    totalCards = []
    selectedCards = []
    score = 0
    attempt = 0

    cards.sort(() => Math.random() - 0.5)
    let divTag = document.createElement('div')
    let heading = document.createElement('h1')
    let attemptPoint = document.createElement('p')
    heading.innerText = 'Attempt Failed'
    attemptPoint.innerText = '0'

    divTag.setAttribute('class','attendDiv')
    heading.setAttribute('class','attempt-heading')
    attemptPoint.setAttribute('class','attemptPoint')

    container.appendChild(divTag)
    divTag.appendChild(heading)
    divTag.appendChild(attemptPoint)

    section1.classList.add('active-btn')
    createGrid()
}

startBtn.addEventListener('click',startGame)

function flippingCards() {
    let getCardId = this.getAttribute('data-id')
    totalCards.push(getCardId)
    selectedCards.push(cards[getCardId].name)
    this.setAttribute('src', cards[getCardId].image)
    this.setAttribute('class','activeImg')

    if(totalCards.length === 2) {
        setTimeout(checkCards,800)
    }
}

function checkCards() {
    let grids = document.querySelectorAll('.grid img')
    let attemptPoint = document.querySelector('.attemptPoint')
    let selectedCardPostition1 = selectedCards[0]
    let selectedCardPostition2 = selectedCards[1] 

    let cardId1 = totalCards[0]
    let cardId2 = totalCards[1]
   
    if(selectedCardPostition1 === selectedCardPostition2) {
        grids[cardId1].removeAttribute('class')
        grids[cardId2].removeAttribute('class')
        grids[cardId1].setAttribute('class','flipBack')
        grids[cardId2].setAttribute('class','flipBack')
        grids[cardId1].setAttribute('src','./files/images/pngtree-well-done-rubber-stamp-png-image_4726513.png')
        grids[cardId2].setAttribute('src','./files/images/pngtree-well-done-rubber-stamp-png-image_4726513.png')
        grids[cardId1].removeEventListener('click',flippingCards)
        grids[cardId2].removeEventListener('click',flippingCards)
        score += 10
    }else {
        grids[cardId1].setAttribute('src', './files/images/thinking-get-started-with-marketing-for-new-retail-business-owners-8.png')
        grids[cardId2].setAttribute('src', './files/images/thinking-get-started-with-marketing-for-new-retail-business-owners-8.png')
        grids[cardId1].removeAttribute('class')
        grids[cardId2].removeAttribute('class')
        grids[cardId1].setAttribute('class','flipBack')
        grids[cardId2].setAttribute('class','flipBack')
        attempt += 1
        attemptPoint.innerText = attempt
    }

    totalCards = []
    selectedCards = []

    if(score === 60) {
        displayResult()
    }
}

let scoreBoard = document.querySelector('.add-score')
let restart = document.querySelector('.restart')
let backToHome = document.querySelector('.home-page')

function displayResult() {
    let attendDiv = document.querySelector('.attendDiv')
    
    let grids = document.querySelectorAll('.grid')
    grids.forEach((arr,index) => {
        grids[index].remove()
    })
    attendDiv.remove()

    let totalScores  = Math.floor(score / attempt)
    console.log(totalScores)
    if(totalScores < 0) {
        totalScores = 0
    }

    section1.classList.add('active-btn')
    section2.style.display = 'block'
    scoreBoard.innerText = totalScores
    clearTimeout(checkCards)
}

restart.addEventListener('click',startGame)

backToHome.addEventListener('click', activeFn)

function activeFn() {
    let grids = document.querySelectorAll('.grid')
    grids.forEach((arr,index) => {
        grids[index].remove()
    })
    totalCards = []
    selectedCards = []
    score = 0
    attempt = 0
    section1.classList.remove('active-btn')
    section2.style.display = 'none'
}