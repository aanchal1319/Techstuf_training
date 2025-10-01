const taskDisplay = document.getElementById("taskDisplay");
const searchBox=document.getElementById("search")
const filterDone=document.getElementById("filter")

function renderTask(post, index) {
  const li = document.createElement("li");
  const dateText = new Date(post.createdAt).toLocaleDateString();

  li.innerHTML = `
  <div class="border border-grey-500 rounded-lg px-2  pt-4 h-40 bg-white hover:bg-gray-100 shadow-md
  " >
    <strong style="${post.done ? 'text-decoration: line-through; color: gray;' : ''}">
      ${post.title}
    </strong>: 
    <span style="${post.done ? 'text-decoration: line-through; color: gray;' : ''}">
      ${post.content}

    </span>
    <br>
    <small>Due: ${post.dueDate || "No due date"}</small><br>
    <small>Added: ${dateText}</small><br>
    <div class="flex gap-4 pt-4 ">
    <button class="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 " id="editBtn">Edit</button>
    <button class="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-600 " id="deleteBtn">Delete</button>
    <button class="bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 " id="done">${post.done ? 'Undo' : 'Done'}</button></div><br><br> <div>
  `;

  li.querySelector("#done").addEventListener("click", () => {
    toggleDone(index);
    loadTasks();
  });

  li.querySelector("#deleteBtn").addEventListener("click", () => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadTasks();
  });

  li.querySelector("#editBtn").addEventListener("click", () => {
    localStorage.setItem("editingTask", JSON.stringify({ index }));
    window.location.href = "index.html";
  });

  taskDisplay.appendChild(li);
}
function loadTasks(sorted = false) {
  taskDisplay.innerHTML = "";
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (posts.length === 0) {
    taskDisplay.innerHTML = "<p>No tasks found.</p>";
    return;
  }


  posts = posts.map((post, i) => ({ ...post, originalIndex: i }));


  posts.sort((a, b) => {
    if (a.done === b.done) {
      return 0;
    }
    return a.done ? 1 : -1; 
  });

  posts.forEach(post => renderTask(post, post.originalIndex)).forEach(post => renderTask(post, post.originalIndex));
}



function filterTasks(query) {
  taskDisplay.innerHTML = "";
  let posts = JSON.parse(localStorage.getItem("posts")) || [];


  posts = posts.map((post, i) => ({ ...post, originalIndex: i }));

  posts
    .filter(task => task.title.toLowerCase().includes(query))
    .forEach(post => renderTask(post, post.originalIndex));
}



   function toggleDone(index) {
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts[index].done = !posts[index].done; 
      localStorage.setItem("posts", JSON.stringify(posts));
    }

document.addEventListener("DOMContentLoaded", loadTasks);


window.addEventListener("storage", () => {
  loadTasks();
});

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  filterTasks(query);
});

