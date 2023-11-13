document.addEventListener('DOMContentLoaded', () => {
let pets = [
    {
       name: "Rubby",
       type: "Dog",
       breed: "Corgi",
       bestTrick: "Tug of war",
       image: "images/rubby.jpg"
    }, {
       name: "Howdy",
       type: "Dog",
       breed: "Mixed Breed",
       bestTrick: "Go find it!",
       image: "images/howdy.jpg"
    }, {
       name: "KitKit",
       type: "Cat",
       breed: "American Shorthair",
       bestTrick: "Commanding his owner to feed him",
       image: "images/kitkit.jpg"
    }, {
       name: "Lil' Miss",
       type: "Cat",
       breed: "Tabby",
       bestTrick: "Looking aloof",
       image: "images/lilmiss.jpg"
    }, {
       name: "Happy",
       type: "Dog",
       breed: "Golden Retriever",
       bestTrick: "Refusing to retrieve!",
       image: "images/happy.jpg"
    }, {
       name: "Piper",
       type: "Dog",
       breed: "Beagle",
       bestTrick: "Find it!  Dropped food edition!",
       image: "images/piper.jpg"
    }, {
       name: "Spooky",
       type: "Cat",
       breed: "Mixed",
       bestTrick: "Gymnastics!",
       image: "images/spooky.jpg"
    }
 ];
 


let petsContainer = document.getElementById('pets-container');

pets.forEach(pet => {

    let card = document.createElement('div'); //card divs//
    card.className ='card col-md-4 mb-4';

    let img = document.createElement('img'); //imageElement//
    img.src = pet.image;
    img.className = 'card-img-top';
    card.appendChild(img);

    let cardBody = document.createElement('div'); //card div//
    cardBody.className = 'card-body';

    let title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = pet.Name;
    cardBody.appendChild(title);

    function createAndAppendParagraph(content, parentElement) {
        let paragraph = document.createElement('p');
        paragraph.classList.add('card-text');
        paragraph.innerText = content;
        parentElement.appendChild(paragraph);
    };

    addParagraph(`Type: ${pet.type}`);
    addParagraph(`Breed: ${pet.breed}`);
    addParagraph(`Best Trick: ${pet.bestTrick}`);

   
    card.appendChild(cardBody);

    
    petsContainer.appendChild(card);
});
});
