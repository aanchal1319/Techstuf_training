const taskTitle = document.getElementById("title");
const taskContent = document.getElementById("task");
const addPostBtn = document.getElementById("addtask");
const cancelEditBtn = document.getElementById("cancelEdit");
const due= document.getElementById("Due");

const taskList = document.getElementById("taskList");

let editingIndex = null; 

document.addEventListener("DOMContentLoaded", () => {
  const editingData = JSON.parse(localStorage.getItem("editingTask"));
  if (editingData !== null) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const task = posts[editingData.index];
    if (task) {
      taskTitle.value = task.title;
      taskContent.value = task.content;
      due.value=task.dueDate
      editingIndex = editingData.index;
      addPostBtn.textContent = "Update task";
      cancelEditBtn.style.display = "inline-block";
    }
    localStorage.removeItem("editingTask"); 
  }
});

document.addEventListener("DOMContentLoaded", loadPosts);

addPostBtn.addEventListener("click", () => {
  const title = taskTitle.value.trim();
  const content = taskContent.value.trim();


   const dueDate = due.value ? due.value : "No due date";

  if (title === "" || content === "") {
    alert("Enter all values");
    return;
  }
  

  if (editingIndex === null) {
    savePost(title, content,dueDate); window.location.href = "task.html";
  } else {
    updatePost(editingIndex, title, content,dueDate); 
    editingIndex = null;
    addPostBtn.textContent = "Save task";
    cancelEditBtn.style.display = "none";
    window.location.href = "task.html";
  }

  taskTitle.value = "";
  taskContent.value = "";
  dueDate.value="";
  loadPosts();
});


cancelEditBtn.addEventListener("click", () => {
  editingIndex = null;
  taskTitle.value = "";
  taskContent.value = "";
  addPostBtn.textContent = "Save task";
  cancelEditBtn.style.display = "none";
});





function savePost(title, content,dueDate, createdAt) {
  
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  //   const newTask = {
  //   title,
  //   content,
  //   dueDate,
  //   createdAt: new Date().toISOString() ,
  //   done: false
    
  // };
  posts.push({title,content,dueDate,createdAt: new Date().toISOString() ,done:false });
  localStorage.setItem("posts", JSON.stringify(posts));
}


function loadPosts() {
  taskList.innerHTML = ""; 
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((post, index) => addPost(post.title, post.content, index));
}


function removePost(index) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
}


function updatePost(index, newTitle, newContent,newDueDate) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts[index] = { ...posts[index],title: newTitle, content: newContent ,dueDate: newDueDate};
  localStorage.setItem("posts", JSON.stringify(posts));
}
