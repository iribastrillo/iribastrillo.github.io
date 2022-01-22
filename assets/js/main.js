window.onload = init;

function init () {
    document.querySelector (".i-menu").addEventListener ('click', toggle_sidebar);
    document.querySelector ("#put-away-sidebar").addEventListener ('click', toggle_sidebar);
}

function toggle_sidebar () {
    let sidebar = document.querySelector ("aside");
    let body = document.body;
    if (sidebar.hidden) {
        body.classList.add ('drawing');
        body.classList.remove ('put-away');
        sidebar.hidden = false;
    } else {
        body.classList.add ('put-away');
        body.classList.remove ('drawing');
        sidebar.hidden = true;
    }   
}
