/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */


 var laptop = document.getElementById('laptop');

 laptop.addEventListener('click', function(laptop){
     laptop.target.classList.toggle('.closed ');
 }) 


//const container = document.querySelector(".container");
//const button = document.querySelector(".cta-button");
/*const paragraph = document.querySelector('.intro-text');
const text = "they dont know that we know they know we know";
const textwrap = document.createElement('p');
textwrap.classList.add("intro-text");
container.append(textwrap); */

// Log when the button is clicked in the console.
/*button.addEventListener("click", () => {
    textwrap.innerText=text;
    button.classList.toggle('blue');
    
}, false); */