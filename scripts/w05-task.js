/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = '';
    temples.forEach(temple => {
        
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';

    const response = await fetch (url);
    const templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
function reset(article) {
    article = ''
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });