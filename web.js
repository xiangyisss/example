const cocktailname = document.getElementById('inputfield');
const button = document.getElementById('button');
const imgspace = document.getElementById('imgspace');

function makeDiv (item){
    const div = document.createElement('div')
    const parag = document.createElement('p')
    const img = document.createElement('img')
    parag.innerHTML = item.strDrink;
    img.src = item.strDrinkThumb;
    div.id = 'holder'
    div.appendChild(img);
    div.appendChild(parag);
    imgspace.appendChild(div);
}


async function getdata (ingredient){
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (res.ok){
            imgspace.innerHTML = ''
            const resjson = await res.json();
            console.log(resjson);
            resjson.drinks.map(drink => {
                makeDiv(drink)
            })
        }
    }  catch(err){
        console.log(err);
    }
}

button.addEventListener('click', () => {
    getdata(cocktailname.value);
});
