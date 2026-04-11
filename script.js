console.log("JS loaded");

const dueDate = new Date("2026-03-01T18:00:00Z");

function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const el = document.getElementById("time-remaining");

  if (diff <= 0) {
    el.textContent = "Overdue!";
    return;
  }

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    el.textContent = `Due in ${days} day(s)`;
  } else if (hours > 0) {
    el.textContent = `Due in ${hours} hour(s)`;
  } else {
    el.textContent = `Due in ${minutes} minute(s)`;
  }
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

const checkbox = document.getElementById("complete-toggle");
const title = document.getElementById("todo-title");
const status = document.getElementById("status");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.style.textDecoration = "line-through";
    status.textContent = "Done";
  } else {
    title.style.textDecoration = "none";
    status.textContent = "Pending";
  }
});

document
  .querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    const title = document.getElementById("todo-title");

    const newText = prompt("Edit your todo:", title.textContent);

    if (newText && newText.trim() !== "") {
      title.textContent = newText;
    }
  });
document
  .querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => alert("Delete clicked"));
