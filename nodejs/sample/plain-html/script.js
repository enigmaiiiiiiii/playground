let state = null;

function useState(initialValue) {

  // Initialize state with initial value
  state = state || initialValue;

  // Define setState function to update state
  function setState(newValue) {
    console.log(`state: ${state}, newValue: ${newValue}`);
    state = newValue;
    console.log('state updated');
    render();
  }

  // Return current state and setState function
  return [state, setState];
}

function render() {

  // Example usage: increment count on button click
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  // Render button to the page with handleClick function
  const buttonElement = document.getElementById('button');
  buttonElement.addEventListener('click', handleClick);

  // Render current count to the page
  const counterElement = document.getElementById('counter');
  counterElement.innerText = `You clicked the button ${count} times.`;

}

render();

