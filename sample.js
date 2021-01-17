const cocktailname = document.getElementById('inputfield');
const button = document.getElementById('button');
const cocktailname1 = document.getElementById('cocktailname1');
const cocktailname2 = document.getElementById('cocktailname2');
const cocktailname3 = document.getElementById('cocktailname3');
const cocktailname4 = document.getElementById('cocktailname4');
const cocktailname5 = document.getElementById('cocktailname5');
const cocktailname6 = document.getElementById('cocktailname6');


//これから下がビーが書いた
function createDiv(ingredient){
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    p.innerHTML = 'name of the drink:' + ingredient.strDrink
    img.src = ingredient.strDrinkThumb
    div.id = 'holder'
    div.appendChild(p)
    div.appendChild(img)
    document.body.appendChild(div)
}
//これから上上がビーが書いた

async function getdata (ingredient){
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (res.ok){
            const resjson = await res.json();
            console.log(resjson);

            //これから下がビーが書いた
            resjson.drinks.map(item => {
                createDiv(item)
            })
            //これから上上がビーが書いた
        }
    }  catch(err){
    console.log(err);
    }
}

button.addEventListener('click', () => {
    getdata(cocktailname.value);
});
