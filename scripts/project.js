const itemsElement = document.querySelector('#items');
let itemList = [];

const displayItems = (items) => {
    itemsElement.innerHTML = '';
    items.forEach(item => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = item.title;

        const p = document.createElement('p');
        p.textContent = item.description;
        p.style.display = 'none'; // keep the description hidden at first

        const img = document.createElement('img');
        img.src = item.image;

        const p2 = document.createElement('p');
        p2.textContent = item.price;

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p2);
        article.appendChild(img);
        
        itemsElement.appendChild(article);
//event listener so that the description will show up when you click on the title
        h3.addEventListener('click', () => {
            if (p.style.display === 'none') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
    });
}

const getItems = async () => {
    const url = 'https://fakestoreapi.com/products';

    const response = await fetch(url);
    const itemList = await response.json();
    displayItems(itemList);
}

getItems();
