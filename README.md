# 📝 Todo Card - Advanced Todo Card(HNG Stage 1a)

## 📌 Overview

This project is an enhanced version of the stage 0 Todo Card, upgraded into a more interactive, stateful component.
It demonstrates core frontend development skills using HTML, CSS, and JavaScript.

---

## 🚀 Features

- Interactive todo task card UI
- Mark task as complete (checkbox toggle)
- Live status update (Pending → Done)
- Countdown timer showing time remaining until due date
- Edit task title functionality
- Delete task functionality
- Fully responsive design
- Accessible structure using semantic HTML and data-testid attributes

---

## ✨ What Changed from Stage 0

- Added Edit Mode with form inputs for:
  - Title
  - Description
  - Priority
  - Due date

- Implemented Save and Cancel functionality

- Introduced Status Control System:
  - Dropdown for "Pending", "In Progress", and "Done"
  - Synced with checkbox and UI display

- Added Expand / Collapse behavior for long descriptions

- Improved Time Handling:
  - Dynamic updates every 60 seconds
  - Displays remaining time or overdue state

- Enhanced Priority System with visual indicators

---

## 🎨 New Design Decisions

- Used a collapsible container to manage long descriptions without breaking layout
- Applied dynamic class-based styling for priority levels (Low, Medium, High)
- Maintained a minimal card layout for clarity and readability
- Chose state-driven UI updates (single source of truth via JavaScript object)
- Kept interactions simple and intuitive for better user experience

---

## ⚠️ Known Limitations

- Time calculation works and updates dynamically, but may display inconsistent overdue values in some cases due to date parsing differences across environments.
- Time formatting could be further improved for more precise outputs.

---

♿ Accessibility Notes

- All form inputs are properly associated with "<label>" elements
- Expand/Collapse button uses:
  - "aria-expanded"
  - "aria-controls"
- Time updates use:
  - "aria-live="polite"" for screen reader announcements
- Keyboard navigation flow is preserved:
  - Checkbox → Status → Expand → Edit → Delete → Form controls
- Semantic HTML elements used where appropriate

---

## 📱 Responsiveness

- Layout adapts across:
  - Mobile (320px)
  - Tablet (768px)
  - Desktop (1024px+)
- Edit form stacks vertically on smaller screens
- No overflow issues with long text or multiple tags

---

## 🧠 Key Features

- Interactive editing system
- Real-time UI updates
- Expandable content handling
- Status synchronization logic
- Dynamic time tracking

---

## 📌 Future Improvements

- Improve time calculation accuracy and formatting
- Add animations for smoother UI transitions
- Implement full task list (multi-card system)
- Enhance visual feedback for overdue tasks

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📂 Project Structure

---

## 🌍 Live Demo

[Click here to view live project](https://steady-cranachan-56f075.netlify.app)

---

## 📦 GitHub Repository

https://github.com/Shadrach-stack/todo-card-hng

---

## 🎯 Task Objective

To build a clean, testable, and interactive Todo Card component demonstrating DOM manipulation, state handling, and basic frontend logic.

---

## 👨‍💻 Author

Built by Shadrach-stack as part of the HNG Frontend Stage 1a task.
