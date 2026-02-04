const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const poussin = document.getElementById("letter-poussin");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

/* =====================
   OPEN LETTER
===================== */
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

/* =====================
   NO BUTTON FLEES
===================== */
noBtn.addEventListener("mouseover", () => {
  const distance = 220;
  const angle = Math.random() * Math.PI * 2;

  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* =====================
   YES CLICKED
===================== */

yesBtn.addEventListener("click", () => {
  title.textContent = "OMG he said cui cOUI 💛";
  title.classList.add("final-title");

  poussin.src = "poussin-yes.png";
  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});