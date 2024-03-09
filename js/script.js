const parent = document.querySelector("#parent");
const tabs = parent.querySelectorAll(".tab");

parent.addEventListener("click", (e) => {
  const clickedElement = e.target;
  // если кликнули на ссылку, то предотвращаем переход по ссылке
  if (clickedElement.tagName === "A") {
    e.preventDefault();
    // удаляем у всех табов класс active
    tabs.forEach((tab) => tab.classList.remove("active"));
    // находим ближайшего родителя с классом tab
    const tab = clickedElement.closest(".tab");
    // добавляем класс active найденному табу
    tab.classList.add("active");
  }
});