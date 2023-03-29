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

/*
function insertLandscape(){
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img, i) => {
        img.setAttribute('src', risultato.photos[i].src.landscape)
    })
}*/

