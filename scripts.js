//nav bar
const burger = document.querySelector(".burger");
const navbarLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-links li");


burger.addEventListener("click", () => {
    navbarLinks.classList.toggle("open");
});


//project cards
let projects = [
    {
        imgURL: "Screenshot from 2021-05-13 13-45-11.png",
        title: "Contact Form",
        imgALT: "card-1",
        techStack: "HTML/CSS",
        description: " A contact form using neomorphism and formspree.",
        githubURL: "https://github.com/jordan-hess/contact-form.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot from 2021-05-13 12-06-10.png",
        title: "My Timeline",
        imgALT: "card-2",
        techStack: "HTML/CSS",
        description: "Timeline using AOS animation and glassmorphism.",
        githubURL: "https://github.com/jordan-hess/my_timeline.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot from 2021-05-13 11-57-33.png",
        imgALT: "card-3",
        title: "Testimonial slider",
        techStack: "HTML/CSS",
        description: "Testimonials using glassmorphism and javascript.",
        githubURL: "https://github.com/jordan-hess/contact-form.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot 2021-06-23 185323.png",
        title: "Lotto Machine",
        imgALT: "card-4",
        techStack: "Python",
        description: "A Lotto machine created using Python.",
        githubURL: "https://github.com/jordan-hess/python-lotto-numbers.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot 2021-06-23 193903.png",
        title: "Currency Converter",
        imgALT: "card-5",
        techStack: "Python",
        description: "Currency converter created using Python.",
        githubURL: "https://github.com/jordan-hess/currency-converter.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot 2021-06-23 200727.png",
        title: "Currency Converter",
        imgALT: "card-6",
        techStack: "JavaScript",
        description: "Calculater using javascript.",
        githubURL: "https://github.com/jordan-hess/js-calculator.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot 2021-06-23 204848.png",
        title: "Sneaker Site",
        imgALT: "card-7",
        techStack: "HTML/CSS",
        description: "Sneaker website using HTML and CSS.",
        githubURL: "https://github.com/jordan-hess/Sneaker_Site.git",
        liveProjectURL: "#"
    },
    {
        imgURL: "Screenshot 2021-06-23 211615.png",
        title: "Temperature converter",
        imgALT: "card-8",
        techStack: "Python",
        description: "Sneaker website using HTML and CSS.",
        githubURL: "https://github.com/jordan-hess/temperature_convertor.git",
        liveProjectURL: "#"
    },
];

function createCard(card) {
    let createdCard = `<div class="project-card" techStack=${card.techStack} >
    <img src="${card.imgURL}" alt="${card.imgALT}">
    <div class="card-info">
    <h4>${card.title}</h4>
    <h6>${card.techStack}</h6>
    <p>${card.description}</p>
    <div>
    <a href="${card.githubURL}">Github</a>
    <a href="${card.liveProjectURL}">Live</a>
    </div>
    </div>
    </div>
    `;
    return createdCard;
}

function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
        let card = createCard(project);
        projectContainer.innerHTML += card;
    }
}

renderCards();

function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
    if (category == "All") {
        for (card of cards) {
            card.style.display = "block";
        }
        return;
    }
    for (card of cards) {
        console.log(card);
        card.style.display = "none";
    }

    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

    for (card of selectedCards) {
        card.style.display = "block";
    }
}
