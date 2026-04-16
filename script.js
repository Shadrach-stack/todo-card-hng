console.log("JS LOADED");

/* =========================
   DATA (source of truth)
========================= */
let todo = {
  title: "Complete HNG Task",
  description:
    "Build a testable todo card with accessibility and responsiveness. This is a longer description to test expand and collapse behavior properly.",
  priority: "High",
  status: "Pending",
  dueDate: "2026-03-01T18:00:00.000Z",
};

/* =========================
   DOM ELEMENTS
========================= */
const titleEl = document.getElementById("todo-title");

const descBox = document.getElementById("desc-box");
const descText = document.getElementById("desc-text");

const priorityEl = document.querySelector('[data-testid="test-todo-priority"]');

const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');

const statusEl = document.getElementById("status");
const statusControl = document.getElementById("status-control");
const checkbox = document.getElementById("complete-toggle");

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector(
  '[data-testid="test-todo-delete-button"]',
);

const form = document.getElementById("edit-form");

const editTitle = document.getElementById("edit-title");
const editDesc = document.getElementById("edit-desc");
const editPriority = document.getElementById("edit-priority");
const editDate = document.getElementById("edit-date");

const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

const expandBtn = document.getElementById("expand-btn");

const timeEl = document.getElementById("time-remaining");
timeEl.setAttribute("aria-live", "polite");

/* =========================
   STATE
========================= */
let expanded = false;

/* =========================
   RENDER
========================= */
function renderTodo() {
  titleEl.textContent = todo.title;
  descText.textContent = todo.description;

  priorityEl.textContent = todo.priority;
  priorityEl.className = `priority ${todo.priority.toLowerCase()}`;

  statusEl.textContent = todo.status;
  statusControl.value = todo.status;

  checkbox.checked = todo.status === "Done";

  dueDateEl.setAttribute("datetime", todo.dueDate);
}

renderTodo();

/* =========================
   EXPAND / COLLAPSE
========================= */
expandBtn.addEventListener("click", () => {
  expanded = !expanded;

  descBox.classList.toggle("expanded", expanded);

  expandBtn.textContent = expanded ? "Collapse" : "Expand";
  expandBtn.setAttribute("aria-expanded", expanded);
});

/* =========================
   EDIT MODE
========================= */
editBtn.addEventListener("click", () => {
  form.style.display = "block";

  editTitle.value = todo.title;
  editDesc.value = todo.description;
  editPriority.value = todo.priority;

  // FIX: convert ISO → datetime-local format
  editDate.value = todo.dueDate.slice(0, 16);
});

/* =========================
   SAVE
========================= */
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  todo.title = editTitle.value;
  todo.description = editDesc.value;
  todo.priority = editPriority.value;

  // FIX: always store ISO format
  todo.dueDate = new Date(editDate.value).toISOString();

  renderTodo();
  form.style.display = "none";
});

/* =========================
   CANCEL
========================= */
cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

/* =========================
   STATUS SYNC
========================= */
checkbox.addEventListener("change", () => {
  todo.status = checkbox.checked ? "Done" : "Pending";

  statusEl.textContent = todo.status;
  statusControl.value = todo.status;

  titleEl.style.textDecoration =
    todo.status === "Done" ? "line-through" : "none";
});

statusControl.addEventListener("change", () => {
  todo.status = statusControl.value;

  statusEl.textContent = todo.status;
  checkbox.checked = todo.status === "Done";

  titleEl.style.textDecoration =
    todo.status === "Done" ? "line-through" : "none";
});

/* =========================
   TIME LOGIC (FIXED)
========================= */
function updateTimeRemaining() {
  const now = new Date();
  const due = new Date(todo.dueDate);
  const diff = due - now;

  if (todo.status === "Done") {
    timeEl.textContent = "Completed";
    return;
  }

  if (diff <= 0) {
    const mins = Math.floor(Math.abs(diff) / 60000);
    const hrs = Math.floor(mins / 60);
    const rem = mins % 60;

    timeEl.textContent =
      hrs > 0 ? `Overdue by ${hrs}h ${rem}m` : `Overdue by ${rem}m`;
    return;
  }

  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);

  if (days > 0) {
    timeEl.textContent = `Due in ${days} day(s)`;
  } else if (hrs > 0) {
    timeEl.textContent = `Due in ${hrs} hour(s)`;
  } else {
    timeEl.textContent = `Due in ${mins} minute(s)`;
  }
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

/* =========================
   DELETE
========================= */
deleteBtn.addEventListener("click", () => {
  alert("Delete clicked");
});
