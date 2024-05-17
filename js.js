

function menuShow(){
    let menuMobile = document.querySelector(".nav-list-mobile"); //Criando uma variável para receber a class .nav-list-mobile
    if (menuMobile.classList.contains('open')){ //Criando uma condição, se  menuMobile tiver a classe .open
        menuMobile.classList.remove('open'); // remova a classe .open
        document.querySelector('.icon').src = 'menu.svg'; // adicione a imagem ico - menu.svg
       
    }else{
        menuMobile.classList.add('open'); // Se não, adicione a classe open
   
        document.querySelector('.icon').src = 'x.png'; // Adicione a image x.png
    }
}




// function menuShow() {
//     let menuMobile = $('.nav-list-mobile');
//     let icon = $('.icon');

//     if (menuMobile.hasClass('open')) {
//         menuMobile.removeClass('open');
//         icon.attr('src', 'menu.svg');
//     } else {
//         menuMobile.addClass('open');
//         icon.attr('src', 'x.png');
//     }
// }


function menuShow() {
    let menuMobile = $('.nav-list-mobile');
    let icon = $('.icon');

    if (menuMobile.hasClass('open')){
        menuMobile.removeClass('open');
        icon.attr('src', 'menu.svg');
    }else{
        menuMobile.addClass('open');
        icon.attr('src', 'x.png')
    }
}



// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
//     }
// }