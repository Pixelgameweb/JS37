document.getElementById('parent').addEventListener('click', function(event) {
  var clickedElement = event.target;
  var tabs = document.querySelectorAll('.tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  var closestTab = clickedElement.closest('.tab');
  closestTab.classList.add('active');
});
// Ну я вообщем все так написал что когда мы кликаем на элементс id парент мы обрабатываем событие потом мы определяем где именно было сделанно событиепотом получаем табы (точнее все блоки с классом таб)Удаляем active нходим бижайшего с классом табИ добавляем актив к табу который нашли
