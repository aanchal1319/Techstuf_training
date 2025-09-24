window.addEventListener("unhandledrejection", (event) => {
  console.log("Unhandled Rejection:", event.reason);
});

window.addEventListener("rejectionhandled", (event) => {
  console.log("Now handled rejection:", event.reason);
});

const p = Promise.reject("Late Boom!");

setTimeout(() => {
  p.catch(err => console.log("Caught later:", err));
}, 1000);
