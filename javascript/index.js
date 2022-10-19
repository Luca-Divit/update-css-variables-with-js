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
const spacing = allTheStyles.getPropertyValue('--spacing');
// console.log(spacing);
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }
// console.log(spacing.setProperty);
