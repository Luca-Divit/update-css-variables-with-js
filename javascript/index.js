console.log('Hello from index.js!');
// color = document.getElementById('color');
// color.setAttribute(value, var(--))
const root = document.querySelector(':root');
// console.log(root);
// function getCssVariables() {
//   // Get the styles (properties and values) for the root
//   const rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
// }
const allTheStyles = getComputedStyle(root);
// const spacing = allTheStyles.getPropertyValue('--spacing');
const spacingBar = document.getElementById('spacing');
const blurBar = document.getElementById('blur')
const colorSelector = document.getElementById('color')
// console.log(spacingBar.value);

// const increaseSpacing = () => {
//   spacing = `${spacingBar.value / 250 * 4}em`;
// }

spacingBar.addEventListener('input', (event) => {
  // console.log(event.target.valueAsNumber);
  let value = event.target.valueAsNumber;
  root.style.setProperty('--spacing', `${value / 250 * 4}em`);
  // spacing.style.setPr = `${value / 250 * 4}em`;
})

blurBar.addEventListener('input', (event) => {
  // console.log(event.target.valueAsNumber);
  let value = event.target.valueAsNumber;
  root.style.setProperty('--blur', `blur(${value / 250}em)`);
  // spacing.style.setPr = `${value / 250 * 4}em`;
})

colorSelector.addEventListener('input', (event) => {
  // console.log(event.target.value);
  let value = event.target.value;
  root.style.setProperty('--color', `${value}`);
  // spacing.style.setPr = `${value / 250 * 4}em`;
})

// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }
// console.log(spacing.setProperty);
