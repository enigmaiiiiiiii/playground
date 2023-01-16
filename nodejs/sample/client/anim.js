export function rotate(element, speed = 5) {
  function update(time) {
    element.style.transform = `rotateZ(${time / 36}deg)`;
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}