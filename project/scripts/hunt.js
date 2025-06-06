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

    // This will retrieve the selected intrests from localStorageS
    function getSelectedIntrests() {
        return JSON.parse(localStorage.getItem('myIntrests'));
    }

    const selectedIntrests = getSelectedIntrests();
    
    // Just having an array of fun
    // These are arrays of strings. You can see from the console when you look at 
    // the first item it is the first letter of the first word in the intersts varibale
    // this is caused by the way the HTML checkboxes are being stored in the variable
    // We can change this by creating a new array by spitting the string array by commas
    console.log(intrests);
    console.log(selectedIntrests);

    console.log(intrests[0]);
    console.log(selectedIntrests[0]);

    // I will use selectedIntrests since this is fetched from localStorage
    const intrestsNew = selectedIntrests.split(", ").map(item => item.trim());
    console.log(intrestsNew);
    console.log(intrestsNew[0]);

    // Replace "views" with "Mountain Views"
    const intrestsView = intrestsNew.map(arrayItem =>
        arrayItem.includes("views") ? "Mountain Views" : arrayItem
    );

    console.log(intrestsView);

    // Now that we have a new array we can manipulate it like ordering it by name
    // Normally a sort like below would work
    intrestsView.sort();
    console.log("Attempted Alphabetized:", intrestsView);

    // I'm not sure what casues it (maybe having a space or the uppercase) but it won't alphabetize correctly unless I us localeCompare
    // Honestly for this one I had to look it up. This one had me stumped. 
    intrestsView.sort((a, b) => a.localeCompare(b));
    console.log("Alphabetized:", intrestsView);

    // With the following each object in the array will now have the first letter capitalized
    const intrestsCap = intrestsView.map(intrestsView =>
        intrestsView.charAt(0).toUpperCase() + intrestsView.slice(1)
    );

    console.log("Capitalized:", intrestsCap);

    // Make each in the list be spaced correctly
    const intrestsFinal = intrestsCap.join(", ");

    // I will use intrestsFinal to display in the div
    // This displays using innerHTML the given text and given variables
    div.innerHTML = `<p>Thank you for signing up, ${firstName} ${lastName}!</p>
        <p>We have received your email address: ${email}.</p>
        <p>Your selected interests include: ${intrestsFinal}.</p>
        <p>We will keep you updated with the latest news and information.</p>`;
}