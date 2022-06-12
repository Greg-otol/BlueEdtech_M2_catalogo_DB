// let imported = document.createElement('script');
// document.head.appendChild(imported);

// let show = true;

// const menuSection = document.querySelector(".menu-section");
// const menuToggle = menuSection.querySelector(".menu-toggle");

// menuToggle.addEventListener("click", () => {
//   document.body.style.overflow = show ? "hidden" : "initial";

//   menuSection.classList.toggle("on", show);
//   show = !show;
// });

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);