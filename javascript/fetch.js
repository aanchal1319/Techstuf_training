// POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello World",
    body: "This is a test post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("POST Result:", data))
  .catch(err => console.error("Error:", err));
