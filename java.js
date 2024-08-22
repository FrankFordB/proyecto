const menuOcultoP = document.getElementById ('menu_p');
const menuIHPP = document.getElementById ('menuIHPP');
const botonAbrirModal = document.querySelector("#boton-abrir-modal");
const botonCerrarModal = document.querySelector("#boton-cerrar-modal");
const botonCerrarModal1 = document.querySelector("#boton-cerrar-modal1");
const modal= document.querySelector("#modal");


function handleNavBehavior() {
  const menuOcultoP = document.getElementById ('menu_p');
  const mediaQuery = window.matchMedia('(max-width: 1050px)');

  if (mediaQuery.matches) {
    // Comportamiento para pantallas pequeñas
    menuOcultoP.innerHTML = 'Menú en vista móvil';
    menuOcultoP.addEventListener('click', () => {
      alert('Menú móvil clickeado');
    });
  } else {
    // Comportamiento para pantallas grandes
    menuOcultoP.innerHTML = 'Menú en vista normal';
    menuOcultoP.removeEventListener('click', () => {
      alert('Menú móvil clickeado');
    });
  }
}

// STYLOS INICIALES
menuOcultoP.style.display = '';
menuIHPP.style.display = 'none';

// ABRIR MENU MEDIA QUERY

function btnMenu () {
  if (menuOcultoP.style.display === ''){
    menuOcultoP.style.display = 'none';
    menuIHPP.style.display = '';
  }  else {
    menuOcultoP.style.display = '';
    menuIHPP.style.display = 'none'
  }
  
}




// MODALES

botonAbrirModal.addEventListener("click",()=>{
    modal.showModal();
});

botonCerrarModal.addEventListener("click",()=>{
    modal.close();
});
botonCerrarModal1.addEventListener("click",()=>{
  modal.close();
});
// botonCerrarModal1.addEventListener("click",()=>{
//     modal.close();
// });



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
