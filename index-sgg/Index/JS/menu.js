const inicio = document.querySelector('.inicio');
const menu = document.querySelector('.menu-navegacion');

//console.log(inicio)
//console.log(menu)



inicio.addEventListener('click', () => {
    menu.classList.toggle('spread')
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') &&
        e.target != menu && e.target != inicio) {

        menu.classList.toggle('spread')
    }
})