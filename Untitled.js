const apiUrl =`https://api.pexels.com/v1/search?query=people`
const apiKey = `SBuC8cjtT7Um4W5Kh6lIDW1IOIAtKdhALJ0kmiR2VP2inFG7gDd4qXrL`

let risultato = null

function fetchData(){
    fetch(apiUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data =>{
        risultato = data;
        console.log(risultato);
        
        //Sostituzione IMG:
        changeImg()
        
        //INSERISCI IMMAGINI
       insertImg()
    })

}


function changeImg(){
    const main = document.querySelector('main')
        const svgs = main.querySelectorAll('svg')
            svgs.forEach(svg =>{
                let img = document.createElement('img')
                svg.parentNode.replaceChild(img, svg)
        })
}

function insertImg(){
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img, i) => {
        img.setAttribute('src', risultato.photos[i].src.portrait)
    })
    let smalls = document.querySelectorAll('small')
    smalls.forEach((small, i) => {
        small.innerHTML = risultato.photos[i].id
    }
    )
}



function hideBtn() {
    let editBtn = document.querySelectorAll('.btn-outline-secondary:nth-of-type(2)')
    editBtn.forEach((elem)=>{
        elem.innerHTML = `Hide`
        elem.addEventListener('click', function(e){
            let card = e.target.parentNode.parentNode.parentNode.parentNode
            card.remove()
        })

    })
}


window.onload = function() {
    hideBtn()
    addInput()
    insertKeyword()
}

function addInput() {
    let jumbotron = document.querySelector ('#jumbo')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'inserisci parola chiave')
    input.setAttribute('name', 'my-input')
    input.setAttribute('id', 'input-key')
    jumbotron.appendChild(input)
}

function insertKeyword() {
    let keywordd = document.getElementById('input-key').value
    if (!keywordd) {
        alert('Inserisci keyword')
    }
    else {
    const apiUrl3 =`https://api.pexels.com/v1/search?query=${keywordd}`
    fetch(apiUrl3, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        risultato = data;
        console.log(risultato);
        
        //Sostituzione IMG:
        changeImg()
        
        //INSERISCI IMMAGINI
       insertImg()
    })
    }
}
