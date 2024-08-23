const menuOcultoP = document.getElementById ('menu_p');
const menuIHPP = document.getElementById ('menuIHPP');
const botonAbrirModal = document.querySelector("#boton-abrir-modal");
const botonCerrarModal = document.querySelector("#boton-cerrar-modal");
const botonCerrarModal1 = document.querySelector("#boton-cerrar-modal1");
const modal= document.querySelector("#modal");

// VARIABLES DE PAGINAS 1 2 3 4

const paginaUno = document.getElementById ('hamburguesa_pagina1');
const paginaDos = document.getElementById ('hamburguesa_pagina2');
const paginaTres = document.getElementById ('hamburguesa_pagina3');
const paginaCuatro = document.getElementById ('hamburguesa_pagina4');

// VARIABLES DE INICIO PEDIDO HAMBURGUESAS 

const colorBtnInicio = document.getElementById('colorBtnInicio');
const colorBtnHaceTuPedido = document.getElementById ('colorBtnPedido');
const colorBtnHamburguesa = document.getElementById('colorBtnHamburguesas');
const colorBtnChedar = document.getElementById('chedarPileta');
const colorBtnPapas = document.getElementById ('colorBtnPapas');


// function handleNavBehavior() {
//   const menuOcultoP = document.getElementById ('menu_p');
//   const mediaQuery = window.matchMedia('(max-width: 1050px)');

//   if (mediaQuery.matches) {
//     // Comportamiento para pantallas pequeñas
//     menuOcultoP.innerHTML = 'Menú en vista móvil';
//     menuOcultoP.addEventListener('click', () => {
//       if (menuOcultoP.style.display === ''){
//     menuOcultoP.style.display = 'none';
//     menuIHPP.style.display = '';
//   }  else {
//     menuOcultoP.style.display = '';
//     menuIHPP.style.display = 'none'
//   }
//       alert('Menú móvil clickeado');
//     });
//   } else {
//     // Comportamiento para pantallas grandes
//     menuOcultoP.innerHTML = 'Menú en vista normal';
//     menuOcultoP.removeEventListener('click', () => {
//       alert('Menú móvil clickeado');
//     });
//   }
// }



// STYLOS INICIALES
menuOcultoP.style.display = 'none';
menuIHPP.style.display = '';
colorBtnInicio.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';

// STYLOS INICIALES PAGINAS
paginaUno.style.display= '';
paginaDos.style.display= 'none';
paginaTres.style.display= 'none';
paginaCuatro.style.display= 'none';

// CAMBIO DE PAGINAS
function btnInicio() {
  paginaUno.style.display= '';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';

  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';
}

function btnHacetupedido() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';

  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';
}

function btnHamburguesas() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= '';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= 'none';
  
  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';
  colorBtnPapas.style.textShadow = '';
}


function btnPiletaChedar() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= '';
  paginaCuatro.style.display= 'none';

  colorBtnChedar.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '';

}

function btnPapas() {
  paginaUno.style.display= 'none';
  paginaDos.style.display= 'none';
  paginaTres.style.display= 'none';
  paginaCuatro.style.display= '';

  colorBtnChedar.style.textShadow = '';
  colorBtnInicio.style.textShadow = '';
  colorBtnHaceTuPedido.style.textShadow = '';
  colorBtnHamburguesa.style.textShadow = '';
  colorBtnPapas.style.textShadow = '3px -2px 8px rgba(233, 105, 0)';
}

// ABRIR MENU (EN MEDIA QUERY) 

function btnMenu () {
  if (menuOcultoP.style.display === 'none'){
    menuOcultoP.style.display = '';
    menuIHPP.style.display = 'none';
  }  else {
    menuOcultoP.style.display = 'none';
    menuIHPP.style.display = ''
  }
  
}




// ABRIR Y CERRAR MODALES 

botonAbrirModal.addEventListener("click",()=>{
    modal.showModal();
});

window.onclick = function (Event) {
  if (Event.target === modal) {
    modal.close();
  } else{

  }
  }

botonCerrarModal.addEventListener("click",()=>{
    modal.close();
});
botonCerrarModal1.addEventListener("click",()=>{
  modal.close();
});




const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", function () {
output.textContent = price.value;
});



output.textContent = modalCantidadSalsa.value;
modalBotonSuma.addEventListener("click",()=>{
    (modalCantidadSalsa) + 1 ;
});
// SUMA MODALSUMA MODALSUMA MODALSUMA MODALSUMA MODALSUMA MODALSUMA MODALSUMA MODAL

function restar() {
    let inputCantidad = document.getElementById('modal_cantidad_salsa');
    let valorActual = parseInt(inputCantidad.value);
    if (!isNaN(valorActual)) {
      inputCantidad.value = valorActual - 1;
    }
  }

  // Función para sumar 1 al valor del input
  function sumar() {
    let inputCantidad = document.getElementById('modal_cantidad_salsa');
    let valorActual = parseInt(inputCantidad.value);
    if (!isNaN(valorActual)) {
      inputCantidad.value = valorActual + 1;
    }
  }


  function restar1() {
    let inputCantidad = document.getElementById('modal_cantidad_salsa1');
    let valorActual = parseInt(inputCantidad.value);
    if (!isNaN(valorActual)) {
      inputCantidad.value = valorActual - 1;
    }
  }

  // Función para sumar 1 al valor del input
  function sumar1() {
    let inputCantidad = document.getElementById('modal_cantidad_salsa1');
    let valorActual = parseInt(inputCantidad.value);
    if (!isNaN(valorActual)) {
      inputCantidad.value = valorActual + 1;
    }
  }
