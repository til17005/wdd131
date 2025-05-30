// Object array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// selects the <select> in the HTML
const select = document.querySelector('#products');

products.forEach(product => {
    // Creates new <option> 
    const option = document.createElement('option');
    // Populates option with the product name
    option.textContent = product.name;
    // Sets the option value to the product name
    option.value = product.name;
    // Add the option to the <select> in the HTML
    select.appendChild(option);
})