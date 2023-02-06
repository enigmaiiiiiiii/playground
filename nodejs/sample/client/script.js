const inputdemo = document.querySelector('#evdm');

inputdemo.addEventListener('change', (e) => {
  console.log(e.target);
  console.log(e.target.value);
})
