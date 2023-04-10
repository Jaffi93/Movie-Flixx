const global = {
    currentPage: window.location.pathname
}

//Highlight Active Link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link')
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active')
        }
    })
}

//Init App
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log(global.currentPage);
            break;
        case '/shows.html':
            console.log(global.currentPage)
            break;
        case '/movie-details.html':
            console.log(global.currentPage);
            break;
        case '/tv-details.html':
            console.log(global.currentPage);
            break;
        case '/search.html':
            console.log(global.currentPage);
            break;
    }
    highlightActiveLink()
}

init()