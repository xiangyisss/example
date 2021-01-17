const button = document.getElementById('button');
const inputfield = document.getElementById('inputfield');
const imgspace = document.getElementById('imgspace');

function data (item) {
const box = document.createElement('div');
const drinkid = document.createElement('p');
const drinkname = document.createElement('p');
drinkid.innerHTML = item.idDrink
drinkname.innerHTML = item.strDrink
drinkid.appendChild(drinkname)
box.appendChild(drinkid)
document.body.appendChild(box)
}

async function getdata (cocktailname) {
    try {
        const res = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailname}`);
        if(res.ok) {
            const ingredient = await res.json();
            console.log(ingredient);
            ingredient.drinks.map(drink => {
                data(drink)
            })
        }
    } catch(error) {
        console.log(error);
    }
} 

button.addEventListener('click', () => {
    getdata(inputfield.value);
})