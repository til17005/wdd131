/*************************
 ***       Menu        ***
 ************************/
const navButton = document.querySelector('.navigate');
const navMenu = document.querySelector('nav');

// My toggle for the hamburger menu in the mobile view
navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});

// My wayfinder
const navLinks = document.querySelectorAll('nav a');
const currentURL = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add('wayfind');
    }
});

/********************
 ***   Set Year   ***
********************/

// sets variable year - finds HTML element with the id of currentyear and stores the reference to that element
const year = document.querySelector("#currentyear");

// sets variable today - creates a data object and stores it
const today = new Date();

/* takes the year variable and inserts it into the HTML - today.getFullYear extracts just the year and enters it inside the <span> tag.
Inner HTML updates that selected element with the formatted content. */
year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;


/*************************
 ***   Last Modified   ***
*************************/

// JAvaScript finds the element with the id of lastModified then sets the content of that element to the document.lastModiefied date/time

// set variable for the lsat modified date time
let lastModDate = new Date(document.lastModified);

//document.getElementById("lastModified").textContent = document.lastModified; This was my first attempt and I didn't like it because of the difficulty in adding additional text

// this replaced the above line and allows me to add text (Last Modified: then calls the variable and converts it to a string)
document.getElementById("lastModified").textContent = "Last Modified: " + lastModDate.toLocaleString();

/************************
 ***   sign-up.html   ***
************************/
const div = document.querySelector('.info');

const URL = new URLSearchParams(window.location.search);
const firstName = URL.get("fname");
const lastName = URL.get("lname");
const email = URL.get("email");
let intrests = URL.getAll("intrests");

if (intrests.length > 0) {
    intrests = intrests.join(", ");
} else {
    intrests = "No interests selected";
}

div.innerHTML = `<p>Thank you for signing up, ${firstName} ${lastName}!</p>
<p>We have received your email address: ${email}.</p>
<p>Your selected interests include: ${intrests}.</p>
<p>We will keep you updated with the latest news and information.</p>`;