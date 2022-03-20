var elAll = document.querySelector('.all');
var elForm = document.querySelector('.form');
var elInput = document.querySelector('input');
var elButton = document.querySelector('.button');




for ( var i = 0; i < pokemons.length; i++){
    var aqua = document.createElement('div');
    aqua.classList.add('elements');

    var num = document.createElement('p');
    num.classList.add('number');
    num.textContent = pokemons[i].id;
    aqua.appendChild(num);

    var image = document.createElement('img');
    image.classList.add('img-list')
    image.src = pokemons[i].img;
    aqua.appendChild(image);

    var title = document.createElement('h4');
    title.classList.add('header');
    title.textContent = pokemons[i].name;
    aqua.appendChild(title);

    var bottomtext = document.createElement('ol');
    bottomtext.classList.add('text');

    for (a = 0 ; a < pokemons[i].weaknesses.length; a++){
        var li = document.createElement('li');
        li.classList.add('li-text');
        li.textContent = pokemons[i].weaknesses[a];
        bottomtext.appendChild(li);
        elInput.value = '';
        aqua.appendChild(bottomtext);
    };
    elAll.appendChild(aqua);
};


elButton.addEventListener('click', function(){

    if ( elInput.value === ''){
        alert('you didn\'t enter id');
        elInput.value = '';
    } else if ( elInput.value > pokemons.length || elInput.value < 1 ){
        alert('it is wrong id');
        elInput.value = '';
    } else {
        elAll.innerHTML = "";
        num.textContent = pokemons[elInput.value - 1].id;
        image.src = pokemons[elInput.value - 1].img;           
        title.textContent = pokemons[elInput.value - 1].name;
        elInput.value = '';
    };
    elAll.appendChild(aqua);
});
