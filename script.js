"use strict"

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

let currentImageIndex = 0;
const currentImageElement = document.querySelector('.image-primary');
const thumbsContainer = document.querySelector('.imge-carousell');

// clono la pagina
const templateCurrentImage = document.getElementById('current-image').content.cloneNode(true);

// compilo l'html
templateCurrentImage.querySelector('img').src = images[currentImageIndex].image;
templateCurrentImage.querySelector('img').alt = images[currentImageIndex].title;
templateCurrentImage.querySelector('.title').innerHTML = images[currentImageIndex].title;
templateCurrentImage.querySelector('.text').innerHTML = images[currentImageIndex].text;

currentImageElement.append(templateCurrentImage);

// thumbs
images.forEach((elm, index) => {
    // template thumb 
    const templateThumb = document.getElementById('thumb').content.cloneNode(true);

    if( index === currentImageIndex ){
        templateThumb.querySelector('.sm-image').classList.add('active');
    }
    templateThumb.querySelector('img').src = elm.image;
    templateThumb.querySelector('img').alt = elm.title;

    thumbsContainer.append(templateThumb);

});

// seleziono le thumbs
const thumbs = document.querySelectorAll('.sm-image');

// next slide
const btnNextSlide = document.querySelector('.down');
btnNextSlide.addEventListener('click', function(){
    // rimuovo classe active
    thumbs[currentImageIndex].classList.remove('active');

    // incrremento currentImageIndex
    if (currentImageIndex < images.length - 1){
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    // aggiungo classe active all'immagine successiva
    thumbs[currentImageIndex].classList.add('active');
    // modifico img a sinistra e il testo
    currentImageElement.querySelector('img').src = images[currentImageIndex].image;
    currentImageElement.querySelector('img').alt = images[currentImageIndex].title;
    currentImageElement.querySelector('.title').innerHTML = images[currentImageIndex].title;
    currentImageElement.querySelector('.text').innerHTML = images[currentImageIndex].text;
});

// prev slide
const btnprevSlide = document.querySelector('.up');
btnprevSlide.addEventListener('click', function(){
    // rimuovo classe active
    thumbs[currentImageIndex].classList.remove('active');

    // incrremento currentImageIndex
    if (currentImageIndex > 0){
        currentImageIndex--;
    } else {
        currentImageIndex = images.length -1;
    }

    // aggiungo classe active all'immagine successiva
    thumbs[currentImageIndex].classList.add('active');
    // modifico img a sinistra e il testo
    currentImageElement.querySelector('img').src = images[currentImageIndex].image;
    currentImageElement.querySelector('img').alt = images[currentImageIndex].title;
    currentImageElement.querySelector('.title').innerHTML = images[currentImageIndex].title;
    currentImageElement.querySelector('.text').innerHTML = images[currentImageIndex].text;
});