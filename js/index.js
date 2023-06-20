

//Preload
const preload = document.querySelector('.preload'); 
const cabeçalho = document.querySelector('.cabeçalho'); 
const contatos  = document.querySelector('.contatos'); 
const logo = document.querySelector('.logo'); 
const container1 = document.querySelector('.container1'); 
const container2 = document.querySelector('.container2'); 
const container3 = document.querySelector('.container3'); 
const footer = document.querySelector('.footer'); 

function getPreload () {

    cabeçalho.style.display = "none"; 
    contatos.style.display = "none"; 
    logo.style.display = "none"
    container1.style.display = "none"; 
    container2.style.display = "none";
    container3.style.display = "none"; 
    footer.style.display = "none"; 

    setTimeout(() => {

        preload.style.display = "none"; 
        cabeçalho.style.display = "block";
        contatos.style.display = "block";
        logo.style.display = "block"
        container1.style.display = "block"; 
        container2.style.display = "block"; 
        container3.style.display = "block"; 
        footer.style.display = "block"; 

    },0); 
}

getPreload(); 




//menu lateral mobile
const btnInicial = document.querySelector('.menu-icon'); 
const btnX = document.querySelector('.menu-x'); 

document.addEventListener('click', (e) => {

    const element = e.target; 

    if (element.classList.contains('menu-icon')) {
        setTimeout(() => {
            btnInicial.style.display = 'none'; 
            btnX.style.display = 'block'; 
        }, 300)
    }else if (element.classList.contains('menu-x')) {
        setTimeout(() => {
            btnInicial.style.display = 'block'; 
            btnX.style.display = 'none'; 
        }, 300)
    }

})







