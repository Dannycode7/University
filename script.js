let background=[
    {
        img: "https://storage.letudiant.fr/mediatheque/letudiant/7/3/2593773-adobestock-402256321-766x438.jpeg",
        h1: "Bienvenue à l'Université Lumière",
        p: "Explorez un univers de savoir, d'excellence académique et d'innovations qui façonnent l’avenir.",
        H:"Pourquoi Choisir l'Université Lumière ?"
    },
    {
        img: "https://i.pinimg.com/1200x/7d/a7/8e/7da78eaf58649c7fe1e4cf7e5dc575d5.jpg",
        h1: "Un Campus, Mille Possibilités",
        p: "Plongez dans un environnement d'apprentissage moderne, conçu pour éveiller votre potentiel et nourrir vos ambitions.",
        H:"apprendre, Innover, Grandir"
       
    },
    {
        img: "https://media.istockphoto.com/id/2105100634/fr/photo/des-%C3%A9tudiants-universitaires-heureux-dapprendre-en-ligne-tout-en-utilisant-un-ordinateur.jpg?s=2048x2048&w=is&k=20&c=hZSDFYj2dzUqgkE3sJLtNV-UR9v2MMyOFTwXyR5I0d0=",
        h1: "L'Excellence comme Engagement",
        p: "Notre mission : élever chaque esprit vers l’excellence, avec passion, rigueur et humanité.",
        H:"Notre Mission, Votre Avenir"
    }
]

let index=0;
function changerback(){
    let headeur=document.getElementById("header");
    headeur.style.backgroundImage=`url(${background[index].img})`;
    let titre=document.getElementById("titre").textContent=background[index].h1;
    let p=document.getElementById("com").textContent=background[index].p;
    let h=document.getElementById("H").textContent=background[index].H;
    index=(index+1)%background.length;
}
setInterval(changerback,5000);
// _________ scroller 
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.nav-bar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// --------------Hamberguer
let Hamberguer=document.getElementById("span");
let croix=document.getElementById("spant");
let nav=document.getElementById("nav");
Hamberguer.addEventListener('click', function(){
   Hamberguer.classList.add('active');
    croix.style.display="block";
    Hamberguer.style.display="none";
    nav.classList.add('active');
})
croix.addEventListener('click',function(){
    croix.classList.add('active');
    Hamberguer.style.display="block";
    croix.style.display="none";
    nav.classList.remove('active');
})
// ------------------> randomer
let personnel = document.getElementById("perso");
let equa = 0;
let max = 25;

let interval = setInterval(() => {
    personnel.innerHTML = equa;
    equa++;

    if (equa > max) {
        clearInterval(interval); 
    }
}, 100); 
let etudiants=document.getElementById("etud");
let etude=0;
let max_etu=1800;
let interval2=setInterval(()=>{
    etudiants.innerHTML=etude;
    etude++;
    if(etude>max_etu){
        clearInterval(interval2)
    }
},1)

let facultes=document.getElementById("fac");
let fac=0;
let fac_tot=6;
let interval3=setInterval(()=>{
    facultes.innerHTML=fac;
    fac++;
    if(fac>fac_tot){
        clearInterval(interval3);
    }
},400)
let anne=document.querySelector(".anne");
let ans=0;
let ans_f=10;
let interval4=setInterval(()=>{
    anne.innerHTML=ans;
    ans++;
    if(ans>ans_f){
        clearInterval(interval4)
    }

},600)
let anne2=document.getElementById("annet");
let ans2=0;
let ans_f2=10;
let interval42=setInterval(()=>{
    anne2.innerHTML=ans2;
    ans2++;
    if(ans2>ans_f2){
        clearInterval(interval42)
    }

},600)

const departments = [
    {
        icon: "fa-laptop-code",
        title: "Informatique",
        description: "Formation en programmation, réseaux, intelligence artificielle et systèmes d'information. Débouchés en développement logiciel, cybersécurité et data science.",
        color: "#2563eb"
    },
    {
        icon: "fa-user-md",
        title: "Médecine",
        description: "Études médicales préparant à devenir médecin, avec spécialisations possibles en chirurgie, pédiatrie, cardiologie et autres disciplines médicales.",
        color: "#059669"
    },
    {
        icon: "fa-gavel",
        title: "Droit",
        description: "Formation complète en droit civil, pénal, des affaires et international. Préparation aux carrières d'avocat, juge, juriste d'entreprise.",
        color: "#2563eb"
    },
    {
        icon: "fa-cogs",
        title: "Ingénierie",
        description: "Programmes en génie civil, mécanique, électrique et autres spécialités. Approche technique et pratique pour concevoir et réaliser des projets complexes.",
        color: "#059669"
    },
    {
        icon: "fa-chart-line",
        title: "Économie-Gestion",
        description: "Étude des marchés, de la comptabilité, du management et de la finance. Débouchés en banque, audit, création d'entreprise et gestion d'organisations.",
        color: "#2563eb"
    },
    {
        icon: "fa-brain",
        title: "Sciences Humaines",
        description: "Exploration de la psychologie, sociologie, histoire et philosophie. Compréhension des sociétés humaines et débouchés variés dans l'éducation et la recherche.",
         color: "#059669"
    }
];

function renderDepartments() {
    const container = document.getElementById('departments-container');
    
    departments.forEach(dept => {
        const card2 = document.createElement('div');
         card2.className = 'departement-haut';
        card2.innerHTML = `
            <div class="departement-base">
            <div class="card-icon" 20; border-color: ${dept.color}">
                <i class="fas ${dept.icon}" style="color: ${dept.color}"></i>
            </div>
            <h3 style="color: ${dept.color}">${dept.title}</h3>
            <p>${dept.description}</p>
            <a href="#" class="cta-button" style="background-color: ${dept.color}">En savoir plus <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        container.appendChild(card2);
    });
}

renderDepartments();
const actualites = [
    {
        date: "15 Oct 2023",
        categorie: "Événement",
        titre: "Forum des Métiers 2023",
        resume: "Notre forum annuel réunira 50 entreprises leaders pour des opportunités de stage et d'emploi. Inscriptions ouvertes jusqu'au 10 octobre.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        lien: "#"
    },
    {
        date: "10 Oct 2023",
        categorie: "Innovation",
        titre: "Lab IA: Nouveaux Équipements",
        resume: "Le département Informatique a acquis 10 stations de travail NVIDIA DGX pour la recherche en intelligence artificielle.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        lien: "#"
    },
    {
        date: "5 Oct 2023",
        categorie: "Pédagogie",
        titre: "Réforme LMD: Ce Qui Change",
        resume: "Découvrez les nouvelles modalités d'évaluation pour l'année universitaire 2023-2024 approuvées par le conseil scientifique.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        lien: "#"
    }
]

function afficherActualites() {
    const container = document.getElementById('actualites-container');
    
    actualites.forEach(actu => {
        const card = document.createElement('article');
        card.className = 'actualite-card';
        card.innerHTML = `
            <img src="${actu.image}" alt="${actu.titre}" class="actualite-image">
            <div class="actualite-content">
                <div class="actualite-date">${actu.date}</div>
                <span class="actualite-categorie">${actu.categorie}</span>
                <h3 class="actualite-titre">${actu.titre}</h3>
                <p class="actualite-resume">${actu.resume}</p>
                <a href="${actu.lien}" class="actualite-lien">Lire la suite →</a>
            </div>
        `;
        container.appendChild(card);
    });
}

afficherActualites();

document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll('.observe-me');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // On arrête d'observer une fois que l'action est déclenchée
      }
    });
  }, {
    threshold: 0.1
  });

  elementsToObserve.forEach(el => observer.observe(el));
});

 const menu = document.querySelector('.menu-dropdown');

  menu.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
  });

  document.addEventListener('click', function () {
    menu.classList.remove('active');
  });



ajouterActualites();
//   ---------------------------------------> deuxiemes actualites 
