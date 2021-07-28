const scrollBtn = document.querySelector('#scroll-btn');
const locationContainer = document.querySelector('#locations-container');
const locationElements = document.querySelectorAll('#locations-container li');
const locationBtn = document.querySelector('#location-btn');
const searchBtn = document.querySelector('#search-btn');
const checkIconContainer = document.querySelector('#check-icon-container');
const searchInput = document.querySelector('#search-input');
const searchResultsContainer = document.querySelector('#search-result ul');
const searchResulstDiv = document.querySelector('#search-result');
const sections = document.querySelectorAll('#sections > div');
const miniBarLinks = document.querySelectorAll('.mini-bar-link');

let isTag = false;
let isOpenLocations = false;

/* Arts images here */

let imgs = [
    {id: 1, src: "https://source.unsplash.com/random/400x500", href:'link here'},
    {id: 2, src: "https://source.unsplash.com/random/400x600", href:'https://google.com'},
    {id: 3, src: "https://source.unsplash.com/random/400x700", href:'link here'},
    {id: 4, src: "https://source.unsplash.com/random/400x800", href:'link here'},
    {id: 5, src: "https://source.unsplash.com/random/500x600", href:'link here'},
    {id: 6, src: "https://source.unsplash.com/random/500x700", href:'link here'},
    {id: 7, src: "https://source.unsplash.com/random/500x800", href:'link here'},
    {id: 8, src: "https://source.unsplash.com/random/500x900", href:'link here'},
    {id: 9, src: "https://source.unsplash.com/random/300x400", href:'link here'},
    {id: 10, src: "https://source.unsplash.com/random/300x400", href:'link here'},
    {id: 11, src: "https://source.unsplash.com/random/300x500", href:'link here'},
    {id: 12, src: "https://source.unsplash.com/random/300x600", href:'link here'},
    {id: 13, src: "https://source.unsplash.com/random/300x700", href:'link here'},
    {id: 14, src: "https://source.unsplash.com/random/600x700", href:'link here'},
    {id: 15, src: "https://source.unsplash.com/random/600x800", href:'link here'},
    {id: 16, src: "https://source.unsplash.com/random/600x900", href:'link here'},
    {id: 17, src: "https://source.unsplash.com/random/700x800", href:'link here'},
    ];

/* End Arts images here */

/* Hotspot images here */

let imgsHotspot = [
    {id: 1, src: "https://source.unsplash.com/random/400x550", href:'link here'},
    {id: 2, src: "https://source.unsplash.com/random/400x650", href:'link here'},
    {id: 3, src: "https://source.unsplash.com/random/400x750", href:'link here'},
    {id: 4, src: "https://source.unsplash.com/random/400x850", href:'link here'},
    {id: 5, src: "https://source.unsplash.com/random/500x650", href:'link here'},
    {id: 6, src: "https://source.unsplash.com/random/500x750", href:'link here'},
    {id: 7, src: "https://source.unsplash.com/random/500x850", href:'link here'},
    {id: 8, src: "https://source.unsplash.com/random/500x950", href:'link here'},
    {id: 9, src: "https://source.unsplash.com/random/300x450", href:'link here'},
    {id: 10, src: "https://source.unsplash.com/random/300x450", href:'link here'},
    {id: 11, src: "https://source.unsplash.com/random/300x550", href:'link here'},
    {id: 12, src: "https://source.unsplash.com/random/300x650", href:'link here'},
    {id: 13, src: "https://source.unsplash.com/random/300x750", href:'link here'},
    {id: 14, src: "https://source.unsplash.com/random/600x750", href:'link here'},
    {id: 15, src: "https://source.unsplash.com/random/600x850", href:'link here'},
    {id: 16, src: "https://source.unsplash.com/random/600x950", href:'link here'},
    {id: 17, src: "https://source.unsplash.com/random/700x850", href:'link here'},
   ]

/* End Hotspot images here */

/* Lifes images here */

let imgsLifes = [
    {id: 1, src: "https://source.unsplash.com/random/400x530", href: 'link here'},
    {id: 2, src: "https://source.unsplash.com/random/400x630", href: 'link here'},
    {id: 3, src: "https://source.unsplash.com/random/400x730", href: 'link here'},
    {id: 4, src: "https://source.unsplash.com/random/400x830", href: 'link here'},
    {id: 5, src: "https://source.unsplash.com/random/500x630", href: 'link here'},
    {id: 6, src: "https://source.unsplash.com/random/500x730", href: 'link here'},
    {id: 7, src: "https://source.unsplash.com/random/500x830", href: 'link here'},
    {id: 8, src: "https://source.unsplash.com/random/500x930", href: 'link here'},
    {id: 9, src: "https://source.unsplash.com/random/300x430", href: 'link here'},
    {id: 10, src: "https://source.unsplash.com/random/300x430", href: 'link here'},
    {id: 11, src: "https://source.unsplash.com/random/300x530", href: 'link here'},
    {id: 12, src: "https://source.unsplash.com/random/300x630", href: 'link here'},
    {id: 13, src: "https://source.unsplash.com/random/300x730", href: 'link here'},
    {id: 14, src: "https://source.unsplash.com/random/600x730", href: 'link here'},
    {id: 15, src: "https://source.unsplash.com/random/600x830", href: 'link here'},
    {id: 16, src: "https://source.unsplash.com/random/600x900", href: 'link here'},
    {id: 17, src: "https://source.unsplash.com/random/700x800", href: 'link here'},
]

/* End Lifes images here */

/* Tags images here */

let imgsTags = [
    {id: 1, src: "https://source.unsplash.com/random/400x520", href: 'link here'},
    {id: 2, src: "https://source.unsplash.com/random/400x620", href: 'link here'},
    {id: 3, src: "https://source.unsplash.com/random/400x730", href: 'link here'},
    {id: 4, src: "https://source.unsplash.com/random/400x840", href: 'link here'},
    {id: 5, src: "https://source.unsplash.com/random/500x660", href: 'link here'},
    {id: 6, src: "https://source.unsplash.com/random/500x720", href: 'link here'},
    {id: 7, src: "https://source.unsplash.com/random/500x830", href: 'link here'},
    {id: 8, src: "https://source.unsplash.com/random/500x930", href: 'link here'},
    {id: 9, src: "https://source.unsplash.com/random/300x430", href: 'link here'},
    {id: 10, src: "https://source.unsplash.com/random/300x430", href: 'link here'},
    {id: 11, src: "https://source.unsplash.com/random/300x530", href: 'link here'},
    {id: 12, src: "https://source.unsplash.com/random/300x630", href: 'link here'},
    {id: 13, src: "https://source.unsplash.com/random/300x730", href: 'link here'},
    {id: 14, src: "https://source.unsplash.com/random/600x730", href: 'link here'},
    {id: 15, src: "https://source.unsplash.com/random/600x830", href: 'link here'},
    {id: 16, src: "https://source.unsplash.com/random/600x900", href: 'link here'},
    {id: 17, src: "https://source.unsplash.com/random/700x800", href: 'link here'},
];

/* End Tags images */

let locations = [
    {id: 1, title: 'Germany'},
    {id: 1, title: 'USA'},
    {id: 1, title: 'Japan'},
    {id: 1, title: 'France'},
    {id: 1, title: 'China'},
];

let searchDataExample = [
    {id: 1, description: "Fish"},
    {id: 2, description: "Meat"},
    {id: 3, description: "Fruits"},
    {id: 4, description: "Vegetable"},
    {id: 5, description: "Yood"},
    {id: 6, description: "Uileh"},
    {id: 7, description: "Good"},
    {id: 8, description: "Kood"},
    {id: 9, description: "Lood"},
    {id: 10, description: "Mood"},
    {id: 11, description: "Oood"},
    {id: 12, description: "Pood"},
    {id: 13, description: "Qood"},
    {id: 14, description: "Rood"},
    {id: 15, description: "sood"},
    {id: 16, description: "Hood"},
    {id: 16, description: "Aood"},
    {id: 16, description: "Bood"},
    {id: 16, description: "Cood"},
];

let results = [];

let isHiddenLocationContainer = true;
let locationC = '';
let selectedLocation = '';
let showSearchModule = false;

function main(){

    // pages titles can change from  here
    fillSearchcontainerBg('find your test', 'search-column', imgs, '');

    fillSearchcontainerBg(`
    <div>
        <span class="small-dot"></span> 
        <span class="small-dot"></span> 
        <span class="small-dot"></span> 
        <span class="small-dot"></span>
        <span class="small-dot"></span>
        <span class="small-dot"></span>
        <span class="small-dot"></span>
    </div>    
        <span> wir kreiren</span>
        <span> ERLEBNISE </span> 
        `,// page title here
         'search-hotspot-column', imgsHotspot, '-hotspot');
    
    fillSearchcontainerBg(`
        <div>
            <span class="small-dot"></span> 
            <span class="small-dot"></span> 
            <span class="small-dot"></span> 
            <span class="small-dot"></span>
            <span class="small-dot"></span>
            <span class="small-dot"></span>
            <span class="small-dot"></span>
        </div>   
        <span>Ancebote</span>
        `, // page title here
        'search-lifes-column', imgsLifes, '-life');

    fillSearchcontainerBg(`
    <div>
        <span class="small-dot"></span> 
        <span class="small-dot"></span> 
        <span class="small-dot"></span> 
        <span class="small-dot"></span>
        <span class="small-dot"></span>
        <span class="small-dot"></span>
        <span class="small-dot"></span>
    </div>   
    <span>Ancebote</span>
    `, // page title here
    'search-tags-column', imgs, '-life')
    
    locationElements.forEach(el => {
        el.addEventListener('click', function(e){
             chooseLocation(e.target.innerHTML, e.target);
        })
    });
    hideModule();
    miniBarLinksFunctionality();

}    


function showLocationContainer(){
    isHiddenLocationContainer = !isHiddenLocationContainer;
    document.querySelectorAll('.location-element').forEach(el => {
        if(el.innerHTML != selectedLocation){
            el.classList.remove('color-selected'); 
        }else{
            el.classList.add('color-selected')
        }
    });
    selectionFunctionality();
}

/* */

/* icons top-down position functions */
function transletTop(){
    document.querySelector('.search-icons-inner-container').classList.add('translate-top');
    isTag = true;
}
function removeTransletTop(){
    document.querySelector('.search-icons-inner-container').classList.remove('translate-top');
    isTag = false;
}
function activeTranslate(){
    if(document.querySelector('.mini-nav a:nth-child(4)').classList.contains('router-link-active')){
        if(!document.querySelector('.search-icons-inner-container').classList.contains('translate-top')){
          document.querySelector('.search-icons-inner-container').classList.add('translate-top');
        }    
    }
}
/* End icons top-down position functions */


function fillSearchcontainerBg(title, columnsName, imgs, titleClass){
    let searchCounter = 1;
    let column = '';
    document.querySelector('#'+columnsName+'-2').innerHTML+= `<div class="search-page-title${titleClass}">${title}</div>`;
    imgs.forEach(item => {
        if(searchCounter < 3){
            column = document.querySelector('#'+columnsName+'-' + searchCounter);
            column.innerHTML += 
            `
            <div class="inner-div">
                <a href="${item.href}"><img src="${item.src}" alt="${item.id}"></a>
            </div>
            `;
            searchCounter++;
        }else{
            column = document.querySelector('#'+columnsName+'-' + searchCounter);
            column.innerHTML += 
            `
            <div class="inner-div">
                <a href="${item.href}"><img src="${item.src}" alt="${item.id}"></a>
            </div>
            `;
            searchCounter = 1;
        }
        
    });
}

function selectionFunctionality(){
    if(!isHiddenLocationContainer){
        if(isTag == true){
            locationBtn.classList.add('move-down-m')
        }else{
            locationBtn.classList.add('move-down');
        }
        scrollBtn.classList.add('hide-right');
        locationContainer.classList.add('show-r');
        searchBtn.classList.add('hide-right');
        checkIconContainer.classList.add('show-r');
        checkIconContainer.classList.remove('hide-r');
        isOpenLocations = true;
    }else{
            locationBtn.classList.remove('move-down-m')
            locationBtn.classList.remove('move-down');
        locationContainer.classList.remove('show-r');
        scrollBtn.classList.remove('hide-right');
        searchBtn.classList.remove('hide-right');
        checkIconContainer.classList.remove('show-r');
        checkIconContainer.classList.add('hide-r');
        isOpenLocations = false;
    }
}

function setLocation(){
    selectedLocation = locationC;
    isHiddenLocationContainer = !isHiddenLocationContainer;
    selectionFunctionality();
}

function chooseLocation(loc, event){   
    locationC = loc;
    document.querySelectorAll('.location-element').forEach(el => {
        el.classList.remove('color-selected');
    });
    event.classList.add('color-selected')

}

function clearLocation(title, event){
   if(selectedLocation == title){
      event.classList.add('color-selected');
   }
}


/* search module functions */
   
function hideModule(){
    document.querySelector('.search-view').addEventListener('click', function(e){
    if(e.target == this){
      e.target.classList.remove('display-show');
      searchInput.value = '';
    }
})
}

function isOpenSearchModule(){   
    if(document.querySelector('.search-view').classList.contains('display-show')){
        document.querySelector('.search-view').classList.remove('display-show');
    }else{
        document.querySelector('.search-view').classList.add('display-show');
        searchInput.focus();
    }  
}

function search(e){
    results = [];
    console.log(e.value)
    for(let i = 0; i < searchDataExample.length; i++){
         if(searchDataExample[i].description[0].toLocaleLowerCase() == e.value.toLocaleLowerCase()){        
          results.push(searchDataExample[i]);
        }
    }
    if(results.length > 0){
       searchResulstDiv.classList.remove('not-visible');
       fillSearchContainerResults();
    }else{
        searchResulstDiv.classList.add('not-visible');
    }
    
    return this.results;
  }

  function fillSearchContainerResults(){
    searchResultsContainer.innerHTML = '';
     results.forEach(el => {
         searchResultsContainer.innerHTML += `
         <li onclick="console.log('zzz')"><span class="dot" ></span>  <span>${el.description}</span></li>
         `
     })
  }

/* End search module functions */

function miniBarLinksFunctionality(){
    miniBarLinks.forEach(el => {
        el.addEventListener('click', function(){
            miniBarLinks.forEach(er => er.classList.remove('router-link-active'));
            el.classList.add('router-link-active');
            selectSection(el.getAttribute('id'));
            if(isOpenLocations){
                setLocation();
            }
        })
    })
}

function selectSection(id){
  sections.forEach(el => {
     el.classList.add('display-none');
  });
  document.querySelector('#'+id.split('-')[1]).classList.remove('display-none');
  if(id.split('-')[1] == 'tags'){

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 6,
        spaceBetween: 10
    
      });

  }
}



main();