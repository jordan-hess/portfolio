//nav bar
const burger = document.querySelector('.burger');
const navbarlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.navbarlink');


// burger.addEventListener('click', () => {

// });

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
