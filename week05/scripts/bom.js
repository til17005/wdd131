/* 

JS for BoM Favorite Chapters

*/

// input - Variable for favortie BoM chapter
const input = document.querySelector('#favchap');
// button - button to submit the favorite chapter
const button = document.querySelector('button');
// list - ul element in whcih an li will be added with the favorit BoM chapter
const list = document.querySelector('#list');

// Chapters Array assinged to getChapterList function or empty using let rather than const as it may need to change
let chaptersArray = getChapterList() || [];

// Sets the local storage using myFavBOMList as the key name and the chaptersArray as the value
// The value is converted into a JSON string
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Gets the value from the myFavBOMlist key and parses it back to an object or array
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// forEach on chaptersArray variable
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    // li - element to be place inside the list (ul)
    const li = document.createElement('li');
    // delButton - a button with an X icon for deleting an entry from the BoM favorite chapters
    const delButton = document.createElement('button');

    // This will populate the li with the input value
    li.textContent = input.value;
    // This creates a visual Big Red X for removing (deleting) an entry
    delButton.textContent = '❌';
    // This add an aria lable (test for the delte button)
    delButton.ariaLabel = 'Delete Item';
    // Reference to .delete in css to size the delete button
    delButton.classList.add('delete');

    // This adds or appends the Big Red X to the li element to be used to delete or remove the item
    li.append(delButton);
    // This will append or add the li to the ul (list)
    list.append(li);

    // delButton function when red X is clicked
    delButton.addEventListener("click", function () {
        // Removes li from list
        list.removeChild(li);
        // Calls deleteChapter function
        deleteChapter(li.textContent);
        // Focus on input
        input.focus();
    });
}

// Removes a specified chapter from the chaptersArray
function deleteChapter(chapter) {
    // Uses slice to remove the last character of the given chapter which should be the big red X
    chapter = chapter.slice(0, chapter.length - 1);
    // Creates a new array excluding the chapter matching the chapter to be deleted
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    // Calls the setChapterList function to update localStorage
    setChapterList();
}

button.addEventListener("click", function () {
    // trim removes white space from the front and back of the text. trimStart() or trimEnd() could also be used to trim the front and back of the text.
    if (input.value.trim() !== '') {

        // Calls displayList function with the input.value argument
        displayList(input.value);

        // Add chapter to chaptersArray using push from the users input
        chaptersArray.push(input.value);

        // Call setChapterList function to update localStorage
        setChapterList();

        // Change input to nothing
        input.value = '';
        // Focus on input
        input.focus();
    }
});

// or arrow function
/*
button.addEventListener("click", () => {
    // trim removes white space from the front and back of the text. trimStart() or trimEnd() could also be used to trim the front and back of the text.
    if (input.value.trim() !== '') {

        // Calls displayList function with the input.value argument
        displayList(input.value);

        // Add chapter to chaptersArray using push from the users input
        chaptersArray.push(input.value);

        // Call setChapterList function to update localStorage
        setChapterList();

        // Change input to nothing
        input.value = '';
        // Focus on input
        input.focus();
    }
});
*/