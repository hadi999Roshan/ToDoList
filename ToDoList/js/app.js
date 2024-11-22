let hamMenu = document.querySelector(".home-screen .ham-menu svg");
let backMenu = document.querySelector(".list-screen .back-menu");
let backdrop = document.querySelector(".container .backdrop-color");
let container = document.querySelector(".container");
let addTaskDiv = document.querySelector(".insert");
let addTaskBtn = document.querySelector(".insert svg");
let form = document.querySelector(".form");
let backDropBlur = document.querySelector(".backdrop-blur");

//making options for select tag
function toggleListCategory() {
  container.classList.toggle("show-category");
  selectTag.innerHTML = "";
  categories.forEach((category) => {
    let option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    selectTag.appendChild(option);
  });
}
// when you want to switch to the form
function toggleForm() {
  form.classList.toggle("active");
  backDropBlur.classList.toggle("active");
  addTaskDiv.classList.toggle("active");
}

backDropBlur.addEventListener("click", () => {
  form.classList.remove("active");
  backDropBlur.classList.remove("active");
  addTaskDiv.classList.remove("active");
});
hamMenu.addEventListener("click", toggleListCategory);
backMenu.addEventListener("click", toggleListCategory);
addTaskBtn.addEventListener("click", toggleForm);


//adding categories and tasks
let categories = [
  {
    title: "Personal",
    img: "boy.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
  },
];

let categoryContainer = document.querySelector(".lists");
let taskTitle = document.querySelector(".task-title");
let taskLength = document.querySelector(".task-length");
let taskImg = document.querySelector(".task-img");
let selectedCtegory = categories[0];
let totalTasks = document.querySelector(".left p span");

//calculate the total number of tasks
function calculateTotal() {
  //tasks.filter
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCtegory.title.toLowerCase()
  );
  totalTasks.innerHTML = tasks.length;
  if (categoryTasks.length) {
    taskLength.innerHTML = categoryTasks.length + " Tasks";
  } else {
  }
}
function renderingCategories() {
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    // with this filter method, tasks of each category will be separated
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.addEventListener("click", () => {
      container.classList.toggle("show-category");
      selectedCtegory = category;
      taskImg.setAttribute("src", `./imgs/${category.img}`);
      taskTitle.innerHTML = category.title;
      renderTasks();
      selectTag.innerHTML = "";
      let option = document.createElement("option");
      option.value = selectedCtegory.title;
      option.textContent = selectedCtegory.title;
      selectTag.appendChild(option);
      
    });
    div.innerHTML = `
            <div class="item">
                <img src="./imgs/${category.img}" alt="">
                <div class="caption">
                    <h1>${category.title}</h1>
                    <p>${categoryTasks.length} Tasks</p>
                </div>
                <div class="toggle-btn">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.96 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>3-vertical-dots</title><path class="cls-1" d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"/></svg>
                </div>
            </div>`;
    categoryContainer.appendChild(div);
  });
}

let tasksContainer = document.querySelector(".tasks");

function renderTasks() {
  tasksContainer.innerHTML = "";
  // with this filter method, tasks of each category will be separated
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCtegory.title.toLowerCase()
  );
  if (categoryTasks.length == 0) {
    taskLength.innerHTML = "0 Tasks";
    renderingCategories();
    tasksContainer.innerHTML = `
            <p class="empty-task">No tasks for this category</p>
            `;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task");
      const label = document.createElement("label");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;

      checkbox.addEventListener("change", () => {
        let index = tasks.findIndex((t) => t.id === task.id);
        //change false to true or true to false
        tasks[index].completed = !tasks[index].completed;
      });

      div.innerHTML = `
      <div class="rightside">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                    `;
      label.innerHTML = `
        <span>${task.task}</span>
      `;
      //insert before the first child of the element
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      let deleteBtn = div.querySelector(".rightside svg");
      deleteBtn.addEventListener("click", () => {
        let index = tasks.findIndex((t) => t.id === task.id);

        tasks.splice(index, 1);
        renderTasks();
      });
    });
    renderingCategories();
    calculateTotal();
  }
}

calculateTotal();
renderingCategories();
renderTasks();

let selectTag = document.querySelector("select");
selectTag.innerHTML = "";
categories.forEach((category) => {
  let option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  selectTag.appendChild(option);
});

let cancelBtn = document.querySelector("#cancel-btn");
let addBtn = document.querySelector("#add-btn");
let taskInput = document.querySelector("#input1-task");

cancelBtn.addEventListener("click", () => {
  form.classList.remove("active");
  backDropBlur.classList.remove("active");
  addTaskDiv.classList.remove("active");
});

// insert new task to specific categories
addBtn.addEventListener("click", () => {
  let value = taskInput.value;
  let category = selectTag.value;

  if (value == "") {
    alert("You should enter a task!");
  } else {
    let newTask = {
      id: tasks.length + 1,
      task: value,
      category: category,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    toggleForm();
    renderTasks();
  }
});
