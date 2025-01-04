//Mostrar modal
const ShowMenuModa = document.getElementById("MenuShowB");
const MyModal = document.getElementById("MyModal");
const SubMenuShow = document.getElementById("SubMenuShow");
const MySubmenuModal = document.getElementById("MySubmenuModal");
let counter = 0;
let counter2 = 0;

ShowMenuModa.addEventListener("click", () => {
  counter++;
  if (counter % 2 == 0) {
    MyModal.style.display = "none";
  } else {
    MyModal.style.display = "block";
  }
});

SubMenuShow.addEventListener("click", () => {
  counter2++;
  if (counter2 % 2 == 0) {
    MySubmenuModal.style.display = "none";
  } else {
    MySubmenuModal.style.display = "flex";
  }
});
//Mostrar modal

//BTN Planes
const btnPLanesAccion = document.getElementById("MyButtonAdquirir");
const ValorOfBtn = btnPLanesAccion.value;

btnPLanesAccion.addEventListener("click", () => {
  const mensaje = encodeURIComponent(
    `Estoy interesado en el Plan ${ValorOfBtn}`
  );
  window.location.href = `https://wa.me/18293774584?text=${mensaje}`;
  console.log(ValorOfBtn);
});

