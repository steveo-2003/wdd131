
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark');
        logo.src = 'byui-logo-white.png'; // Use a white logo for dark mode
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark');
        logo.src = 'byui-logo-blue.webp'; // Use the default blue logo for light mode
    }
}           
                    