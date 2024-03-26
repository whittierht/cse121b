/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Hyrum Whittier',
    photo: 'images/myface.jpg',
    favoriteFoods: [
        'Hamburger',
        'Sushi',
        'Smoked BBQ',
        'Chicken Alfredo',
        'Steak',
        'Pizza',
        'Fried Rice'
    ],
    hobbies: [
        'Piano',
        'Ukulele',
        'Music Production',
        'Video Games',
        'Making My Wife Happy',
        'Pickleball'
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Clinton, UT',
        length: '9 years'
    },
    {
        place: 'Farmington, UT',
        length: '6 Years'
    },
    {
        place: 'Saratoga Springs, UT',
        length: '5 Years'
    },
    {
        place: 'Tampa, FL',
        length: '2 Years'
    },
    {
        place: 'Rexburg, ID',
        length: '1 Year'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt - myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
/* Places Lived DataList */


