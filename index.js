const buttonBackground = document.getElementById("button1");

buttonBackground,addEventListener('click', (event) =>{
  event.target.style.background = 'hsl(227, 100%, 82%)'
  event.target.style.color = 'black'
  event.target.style.border = '2px solid black'
});