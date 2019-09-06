// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function articleCards(obj) {

    const articleCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const spanEl = document.createElement('span');

    articleCard.classList.add('.card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = obj.data.articles.authorPhoto;
    headline.textContent = obj.data.articles.headline;
    spanEl.textContent = `By ${obj.data.articles.authorName}`;

    articleCard.appendChild(headline);
    articleCard.appendChild(author);
    articleCard.appendChild(imgContainer);
    imgContainer.appendChild(img);
    articleCard.appendChild(spanEl);


    return articleCard;

}


const cardsContainer = document.querySelector('.cards-container');


axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);

        const dataInfo = Object.entries(response.data.articles);
        console.log(dataInfo)
        dataInfo.forEach(item => {
            const newArticle = articleCards(item);
            console.log(newArticle)
            cardsContainer.appendChild(newArticle);
        });

    })
    .catch(error => {
        console.log("The data was not returned", error);
    });