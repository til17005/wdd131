/* 

JS for BoM Favorite Chapters

*/

// input - Variable for favortie BoM chapter
const input = document.querySelector('#favchap');
// button - button to submit the favorite chapter
const button = document.querySelector('button');
// list - ul element in whcih an li will be added with the favorit BoM chapter
const list = document.querySelector('#list');

// Click event added to button
button.addEventListener("click", function () {
    // trim removes white space from the front and back of the text. trimStart() or trimEnd() could also be used to trim the front and back of the text.
    if (input.value.trim() !== '') {
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

        // This adds or appends the Big Red X to the li element to be used to delete or remove the item
        li.append(delButton);
        // This will append or add the li to the ul (list)
        list.append(li);

        delButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
    }
    input.value = '';
    input.focus();
});



