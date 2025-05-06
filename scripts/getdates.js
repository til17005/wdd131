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
document.getElementById("lastModified").textContent = document.lastModified;
