const dropdown = document.querySelector('.select-alien');

dropdown.addEventListener('fwOptionClick', function updLablOfDrpdwn() {
  return dropdown.setAttribute('label', dropdown.value);
});
