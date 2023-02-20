const clock = document.querySelector(".clock");

// setInterval(() => {
//   const date = new Date();

//   const seconds = date.getSeconds();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();

//   clock.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>`;
// }, 1000);

const tick = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const html = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
