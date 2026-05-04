const startButton = document.querySelector('.start-btn');

function typeText(element, text) {
element.textContent = "";
element.style.visibility ="visible";
let i=0;

function typeNext() {
  if (i < text.length) {
    element.textContent += text[i];
    i++;
    setTimeout(typeNext, Math.random() * 40 + 20);
  } 
}
typeNext()
}

startButton.addEventListener('click', () => {
  const blackSideText = document.querySelector('.blacksays');
  const whiteSideText = document.querySelector('.whitesays');
  
  setTimeout(() => {
    typeText(blackSideText, 'Hello.');
    typeText(whiteSideText, 'Hey.');
  }, 1200)

  startButton.style.opacity = '0';
    setTimeout(() => startButton.style.display = 'none', 800);
  
    
});

