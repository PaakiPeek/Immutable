let pixel = document.querySelectorAll('.pixel');
let chosen = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');


for (let p of pixel) {
  p.onclick = function() {
    if (eraser.checked) {
      p.style.backgroundColor = 'white';
    } else {
      p.style.backgroundColor = chosen.value;
    }
  }
}