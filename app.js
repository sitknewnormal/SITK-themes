'use script'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    let className = document.body.className;
    this.textContent = className == "light-theme" ? "Dark" : "Light";
    console.log('current <body> class name: ' + className);
});