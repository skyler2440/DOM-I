
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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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

// Images
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

const contentImg = document.getElementById("middle-img");
contentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Nav
const navBar = document.querySelectorAll("a");
const headerNav = document.querySelector("header nav");
const aColor = Array.from(document.querySelectorAll("header nav a"));

for (let i = 0; i <navBar.length; i++) {
  navBar[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

const home = document.createElement('a');
home.href = '#';
home.textContent = "Home";
headerNav.prepend(home);

const whoAre = document.createElement("a");
whoAre.href = "#";
whoAre.textContent = "Who Are We";
headerNav.append(whoAre);
aColor.push(home);
aColor.push(whoAre);
for (let i = 0; i < aColor.length; i++){
  aColor[i].style.color = "green";
}

// aColor.push(home);

//Header
const cta = document.querySelector("h1");
cta.innerHTML=siteContent["cta"]["h1"];

const button = document.querySelectorAll(".cta-text");
button[0].getElementsByTagName("button")[0].textContent = siteContent["cta"]["button"];

//Main Content Contact Footer
const txtContent = document.querySelectorAll('.text-content');
txtContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
txtContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

txtContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
txtContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

txtContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
txtContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];

txtContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
txtContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content'];

txtContent[4].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
txtContent[4].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];

//Contact
const contact= document.querySelectorAll(".contact");
contact[0].getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contact[0].getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contact[0].getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contact[0].getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];

//Footer
const footer = document.querySelectorAll("footer");
footer[0].getElementsByTagName('p')[0].textContent = siteContent["footer"]["copyright"];
