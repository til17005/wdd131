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
// I didn't know how to do this if statement with the includes. I had to research that one.
// The if keeps the JS from running this and erroring on other pages. It's only called for sign-up.html
if (window.location.href.includes("sign-up.html")) {
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

    // This will set the localStorage with the intrests that were selected on the form.
    function setSelectedIntrests() {
        localStorage.setItem('myIntrests', JSON.stringify(intrests));
    }

    setSelectedIntrests();

    // This will retrieve the selected intrests from localStorage

    function getSelectedIntrests() {
        return JSON.parse(localStorage.getItem('myIntrests'));
    }

    const selectedIntrests = getSelectedIntrests();

    // This displays using innerHTML the given text and given variables
    div.innerHTML = `<p>Thank you for signing up, ${firstName} ${lastName}!</p>
        <p>We have received your email address: ${email}.</p>
        <p>Your selected interests include: ${selectedIntrests}.</p>
        <p>We will keep you updated with the latest news and information.</p>`;
}

// I have done this before, but couldn't remember exactly how. I had to do some digging and research for the the following.
// I just thought it woudl be a nice touch for the type of site I have put together.
async function getWeather(zipCode) {
    const myAPIKey = '169611a2e24d4b359611a2e24deb357e';
    const weatherURL = `https://api.weather.com/v3/wx/conditions/current?apiKey=${myAPIKey}&language=en-US&format=json&postalKey=${zipCode}:US`;

    const weatherDIV = document.querySelector('.weather');

    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('Invalid ZIP code or bad request. Please check the ZIP and try again.');
            } else if (response.status === 401) {
                throw new Error('API Key unauthorized. Please check your API Key.');
            } else {
                throw new Error(`Weather data is not available (Status: ${response.status}).`);
            }
        }

        const data = await response.json();

        if (data.v3wxCurrentConditions && data.v3wxCurrentConditions.temperature && data.v3wxCurrentConditions.narrative) {
            weatherDIV.innerHTML = `
                <h3>Weather for ${zipCode}</h3>
                <p>Temp: ${data.v3wxCurrentConditions.temperature}°F</p>
                <p>Condition: ${data.v3wxCurrentConditions.narrative}</p>
            `;
        } else {
            // Updated to handle common structure of Weather.com v3 current conditions API
            weatherDIV.innerHTML = '<p style="color: orange;">Weather data for this ZIP code is not fully available.</p>';
            console.warn("API response missing expected data:", data);
        }

    } catch (error) {
        console.error("Error retrieving the weather data!", error);
        weatherDIV.innerHTML = `<p style="color: red;">Error: ${error.message || "Failed to fetch weather data."}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const zipCodeForm = document.querySelector('.zipCodeForm');
    const userZipCode = document.querySelector('.zip');
    const weatherDIV = document.querySelector('.weather');

    const initialZip = userZipCode.value.trim();
    if (initialZip.length === 5 && /^[0-9]{5}$/.test(initialZip)) {
        getWeather(initialZip);
    } else {
        // Fallback for initial invalid default zip, though HTML 'value' attribute should prevent this
        weatherDIV.innerHTML = '<p style="color: red;">Initial ZIP code is invalid. Please enter a valid 5-digit ZIP code.</p>';
    }

    zipCodeForm.addEventListener('submit', (event) => {
        // Don't reload the page
        event.preventDefault();
    })

    const userEnteredZip = userZipCode.value.trim();

    // Validate user entered zip code and stop if it fails
    if (userEnteredZip.length !== 5 || !/^[0-9]{5}$/.test(userEnteredZip)) {
        weatherDIV.innerHTML = '<p style="color: red;">Please enter a valid 5-digit ZIP code.</p>';
        return;
    }

    getWeather(userEnteredZip);
    console.log(userEnteredZip);
})