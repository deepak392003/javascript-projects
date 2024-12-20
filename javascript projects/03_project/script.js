const clock = document.querySelector(".clock");

// let date = new Date();
// console.log("date is ", date.toLocaleString());

setInterval(() => {
  let date = new Date();
//   console.log("date is ", date.toLocaleString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);
