const navButton = document.querySelector('.navigate');
const navMenu = document.querySelector('nav');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});


const navLinks = document.querySelectorAll('nav a');
const currentURL = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('wayfind');
    }
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bern Switzerland Temple",
        location: "Bern Switzerland",
        dedicated: "September 11, 1955",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado Temple",
        location: "Denver Colorado",
        dedicated: "October 24, 1986",
        area: 29117,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-766966-wallpaper.jpg"
    },
    {
        templeName: "Durban South Africa Temple",
        location: "Durban South Africa",
        dedicated: "February 16, 2020",
        area: 19860,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/5-a34bb1899983ed73e499a18da741b3704e1d4d35.jpg"
    },
    // Add more temple objects here...
];

function getYearFromDedicated(dedicatedStr) {
    const yearString = dedicatedStr.slice(-4);
    return parseInt(yearString, 10);
}

const oldTemples = document.querySelector(".old");
const newTemples = document.querySelector("new");
const largeTemples = document.querySelector("large");
const smallTemples = document.querySelector("small");

oldTemples.addEventListener("click", () => {
    const html = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900)
        .map(templeCard)
        .join("");

    document.querySelector(".img-grid").innerHTML = html;
});


function templeCard(temple) {
    return `
        <section>
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
            <picture>
                <img src="${temple.imageUrl}" alt="Picture of ${temple.templeName}" loading="lazy">
            </picture>
        </section>
    `
}


/*
function renderTemple(templeCards) {
    const html = templeCards.map(templeCard);
    document.querySelector(".img-grid").innerHTML = html.join("");
}


renderTemple(temples);

*/