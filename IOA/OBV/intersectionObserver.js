let alleLinks = document.querySelectorAll('nav a');
///////////////// Second video//////////////////////////////////////////////////////////////////
let deSecties = document.querySelectorAll('section');

const opties = {
  //////////////// video 4 3min///////////////////
  ////////////////// video 5 /////////////////////////////////////////////////////////////
  // rootMargin: '-150px',
  treshold: 1.0
};

const verwerkDoorsnijding = (entries, observer) => {
  entries.forEach( entry => {
    ///// video 5 1:29 ///////////
   console.log(entry.target.parentNode.id + " doorsnijdt " + entry.isIntersecting);
   ////// video 3 6:02 /////////
   if ( entry.isIntersecting ) {
     let link = zoekBijpassendeLink('#' + entry.target.parentNode.id);
     maakActief(link);
   }
 });

}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

// observer.observe(deSecties[1]);
/////////// video 4 ////////////////////////////////////////////////////////////////////////
deSecties.forEach( sectie => {
  observer.observe(sectie.getElementsByTagName('p')[0]);
});

//// first video 6:08///////////////////////////////////////////////////////////////////////////
const verwijderActief = () => {
  alleLinks.forEach( (link) => {
    if( link.classList = 'actief') {
      link.classList.remove('actief');
    }
  });
}

///////// video 1///////////////////
const maakActief = (elem) => {
  verwijderActief();
  elem.classList.add('actief');
}

alleLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      maakActief(e.target);
      window.location = e.target.href;
    })
});

//////////// 3de video //////////////////////////////////////////////////////////////////

const zoekBijpassendeLink = (id) => {
  let link = document.querySelector('nav a[href="' + id +'"]');
  return link;
}
