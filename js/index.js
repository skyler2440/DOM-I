const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "mc-h4-1":"Features",
    "mc-p-1": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "mc-h4-2":"About",
    "mc-p-2": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "mc-h4-3":"Services",
    "mc-p-3": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "mc-h4-4":"Product",
    "mc-p-4": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "mc-h4-5":"Vision",
    "mc-p-5": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const doc = document;

//images
const logo = doc.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = doc.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);
// console.log(headerImg)

const midImg = doc.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

//navbar

const navBar = doc.querySelectorAll("a");
const headerNav = doc.querySelector("header nav");
const aColor = Array.from(doc.querySelectorAll("header nav a"));

for (let i = 0; i <navBar.length; i++) {
  navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

const createAHome = doc.createElement('a');
createAHome.href = 'a';
createAHome.textContent = 'Home';
headerNav.prepend(createAHome);

const createAWho = doc.createElement('a');
createAWho.href = 'a';
createAWho.textContent = 'Who Are We';
headerNav.append(createAWho);

//header

const cta = doc.querySelector('h1');
cta.innerHTML = siteContent["cta"]['h1'];

const button = doc.querySelectorAll('.cta-text');
button[0].getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

//main content
const mainContentH4 = doc.querySelectorAll('.main-content h4')
const mainContentP = doc.querySelectorAll('.main-content p')


for (let i = 0; i <mainContentH4.length; i++) {
  mainContentH4[i].textContent = siteContent['main-content'][`mc-h4-${i +1}`]
}
for (let i = 0; i <mainContentP.length; i++) {
  mainContentP[i].textContent = siteContent['main-content'][`mc-p-${i +1}`]
}
//contact
const contact= document.querySelectorAll(".contact");
contact[0].getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contact[0].getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contact[0].getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contact[0].getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];