function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  const minHand = document.querySelector(".min-hand");
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
