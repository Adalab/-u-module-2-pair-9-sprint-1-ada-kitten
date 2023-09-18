'use strict';

const listElement = document.querySelector ('.js-list');



const kittenImageOne =  'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastasio';
const kittenDescOne = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`; 
const kittenRaceOne = 'Siames';

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenRaceTwo = 'Sphynx';

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenRaceThree = 'Maine Coon';


const kittenOne = ` <li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImageOne}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">${kittenDescOne}
  </p>
</article>
</li>`; 

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kittenImageTwo}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">${kittenDescTwo}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kittenImageThree}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">${kittenDescThree}
</p>
</li>`;



const input_search_desc = document.querySelector ('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

// if( !kittenDescOne.includes(descrSearchText) ) {
//   kittenOne.classList.add ('hidden');
//   }
  
//   if( !kittenDescTwo.includes(descrSearchText) ) {
//   kittenTwo.classList.add ('hidden');
//   }
  
//   if( !kittenDescThree.includes(descrSearchText) ) {
//     kittenThree.classList.add ('hidden');
//   }
  
  // listElement.innerHTML = kittenOne + kittenTwo + kittenThree;


 /***********Eventos***********/

const btnPlus = document.querySelector('.js-plus');
const btnAdd = document.querySelector('.js-btn-add');
const btnMenu = document.querySelector('.js-new-menu');

btnPlus.addEventListener('click',(event) =>{
  event.preventDefault();
  btnMenu.classList.toggle('collapsed');
});

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const btnCancel = document.querySelector ('.js-btn-cancel');

btnAdd.addEventListener('click', (event) =>{
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc ==='' || valuePhoto ===''|| valueName ===''){
    labelMessageError.innerHTML = ('¡Ay!, parece que te has olvidado algo');
  }
});
btnCancel.addEventListener('click', (event) =>{
    event.preventDefault();
    inputDesc.value= '';
    inputPhoto.value= '';
    inputName.value= '';
    btnMenu.classList.toggle('collapsed');
});


/**********funciones*************/


const buttonSearch = document.querySelector ('.js-button-search');

// const input_search_desc = document.querySelector ('.js_in_search_desc');

// const descrSearchText = input_search_desc.value;

const filterKitten = (event) => {
  event.preventDefault (); 
    listElement.innerHTML = ''; 
    const descrSearchText = input_search_desc.value;

  if (kittenDescOne.includes (descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDescTwo.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDescThree.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener ('click', filterKitten);

/************Render**************/


function renderKitten(kitten) {
  const liKitten =`<li class="card">
  <img
    class="card_img"
    src="${kitten.image}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${kitten.name}</h3>
  <h4 class="card_race">${kitten.race}</h4>
  <p class="card_description">${kitten.desc}
  </p>
  </li>`;
  
  return liKitten
}



/************Objetos**************/

const kittenData_1 = {
  image: `${kittenImageOne}`,
  name: `${kittenNameOne}`,
  desc: `${kittenDescOne}`,
  race:  `${kittenRaceOne}`,
};

const kittenData_2 =
{
  image: `${kittenImageTwo}`,
  name: `${kittenNameTwo}`,
  desc: `${kittenDescTwo}`,
  race: `${kittenRaceTwo}`,

};

const kittenData_3 = 

{
  image: `${kittenImageThree}`,
  name: `${kittenNameThree}`,
  desc: `${kittenDescThree}`,
  race: `${kittenRaceThree}`,
 };

/// Array ///

// listElement.innerHTML = renderKitten(kittenData_1)+renderKitten(kittenData_2)+ renderKitten(kittenData_3)

const kittenDataList = [ kittenData_1, kittenData_2, kittenData_3];

// console.log(kittenDataList[2].name);

/*******************Bucles****************/

function renderKittenList (kittenDataList){
 listElement.innerHTML = "";
 for (let i = 0; i <= kittenDataList.length; i++){
  listElement.innerHTML += renderKitten(kittenDataList[i]);
 }
}
renderKittenList(kittenDataList);

