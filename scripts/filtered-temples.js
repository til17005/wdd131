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

// My querySelector variables
const navButton = document.querySelector('.navigate');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const pageTitle = document.querySelector(".page");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

// My function for getting the dedicated string and converting it to a date
function getYearFromDedicated(dedicatedStr) {
    // This will onvert the dedicated string to a date
    const date = new Date(dedicatedStr);
    // This will get the date and make sure it's a number. It will return NaN (not a number) if it's not valid
    return isNaN(date.getFullYear()) ? null : date.getFullYear();
}

// Using this to troublshoot my getYear function above for use with multiple date formats
console.log(getYearFromDedicated("1888, May, 21"));
console.log(getYearFromDedicated("September 11, 1955"));

// This verifies my function for date works, and by area by grabbing temples that match and logging them to the console
console.log(temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900));
console.log(temples.filter(temple => getYearFromDedicated(temple.dedicated) > 1900));
console.log(temples.filter(temple => temple.area > 90000));
console.log(temples.filter(temple => temple.area < 10000));

// My emple card layout in html
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

// my rendering function for all cards
function renderTemple(templeCards) {
    const html = templeCards.map(templeCard);
    document.querySelector(".img-grid").innerHTML = html.join("");
}

// My toggle for the hamburger menu in the mobile view
navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});

// most likey not needed. I was trying to set the default to home, but have had issues getting it to load.
// It shows home in the console, but nothing would load. I may work on this more later.
let activeLink = "home";


// I had to completely change the way I do my way finder.
// Probably not the best way to do it as it's not intigrated 
// with the temple cards and the page title


// DOMContentLoaded helps me by loading these defaults for me before any user interaction occurs.
window.addEventListener('DOMContentLoaded', () => {
    // This will essentially set the wayfind to Home as it's teh default page for filteree-temples.html
    const homeLink = document.getElementById('home');
    if (homeLink) {
        homeLink.classList.add('wayfind');
    }
    // THis will use the page class for the <h2> element and set it to Home (default page load)
    const pageTitle = document.querySelector(".page");
    if (pageTitle) {
        pageTitle.textContent = "Home";
    }
    // THis will render the full list of temples for the home page (default page load)
    renderTemple(temples);
});

const getActiveLinkId = () => {
    // Lets find the active link then return the id or null if none are active
    const activeLink = document.querySelector('.wayfind');
    return activeLink ? activeLink.id : null;
};


// Essentially it's listening for a click on any link
// When it gets one it uses the <a> that was clicked
// prevents it from reloading, using teh preventDefault
// method. It removes any previous wayfind, and assigns
// the class of wayfind to the new clicked <a>. It also
// adds the pageTitle of which nav link was clicked. The 
// if statements are self explanatory for each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navLinks.forEach(nav => nav.classList.remove('wayfind'));
        event.target.classList.add('wayfind');

        const newActiveLink = getActiveLinkId();
        if (newActiveLink) {
            activeLink = newActiveLink;
        }

        pageTitle.textContent = event.target.textContent.trim();

        if (activeLink == "Home") {
            renderTemple(temples);
        }
        else if (activeLink == "Old") {
            const html = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900)
                .map(templeCard)
                .join("");
            document.querySelector(".img-grid").innerHTML = html;
        }
        else if (activeLink == "New") {
            const html = temples.filter(temple => getYearFromDedicated(temple.dedicated) > 2000)
                .map(templeCard)
                .join("");
            document.querySelector(".img-grid").innerHTML = html;
        }
        else if (activeLink == "Large") {
            const html = temples.filter(temple => temple.area > 90000)
                .map(templeCard)
                .join("");
            document.querySelector(".img-grid").innerHTML = html;
        }
        else if (activeLink == "Small") {
            const html = temples.filter(temple => temple.area < 10000)
                .map(templeCard)
                .join("");
            document.querySelector(".img-grid").innerHTML = html;
        }
        else {
            renderTemple(temples);
        }

        // Added to help me troubleshoot issues
        console.log("Active Link ID:", activeLink);
    });
});

/*

// Old Code I was working with

const navLinks = document.querySelectorAll('nav a');
const currentURL = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('wayfind');
    }
});

oldTemples.addEventListener("click", () => {
    const html = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900)
        .map(templeCard)
        .join("");

    document.querySelector(".img-grid").innerHTML = html;
});

newTemples.addEventListener("click", () => {
    const html = temples.filter(temple => getYearFromDedicated(temple.dedicated) > 2000)
        .map(templeCard)
        .join("");

    document.querySelector(".img-grid").innerHTML = html;
});

largeTemples.addEventListener("click", () => {
    const html = (temples.filter(temple => temple.area > 90000))
        .map(templeCard)
        .join("");

    document.querySelector(".img-grid").innerHTML = html;
});


smallTemples.addEventListener("click", () => {
    const html = (temples.filter(temple => temple.area < 10000))
        .map(templeCard)
        .join("");

    document.querySelector(".img-grid").innerHTML = html;
});
*/