let taskAssigned = document.getElementById("taskAssigned");
let checkList = document.getElementById("checkList");
let taskCount = parseInt(taskAssigned.textContent, 10);
let checkCount = parseInt(checkList.textContent, 10);
let activityLog = document.getElementById("activityLog");
let clearHistoryBtn = document.getElementById("clearHistory");
let completedTasks = 0;

for (let i = 1; i <= 6; i++) {
  document
    .getElementById("btn-card-" + i)
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (!this.disabled) {
        alert("Board updated Succesfully");
        // Background Color change when color button clicked
        this.style.backgroundColor = "rgba(0,0,0,0.3)";
        this.style.color = "rgba(0,0,0,0.2)";
        this.disabled = true;
        if (taskCount > 0) {
          taskCount--;
          taskAssigned.textContent = taskCount.toString();
        }
        checkCount++;
        checkList.textContent = checkCount.toString();
        completedTasks++;
        // Task Message in Activity log
        let taskMessage = document.getElementById("task-" + i).textContent;
        let timeNow = new Date().toLocaleTimeString();

        let logEntry = document.createElement("h1");
        logEntry.className =
          "log-entry bg-[rgb(244,247,255)] p-4 rounded-2xl mb-4";
        logEntry.innerHTML = `You have Complete The Task <b>${taskMessage}</b>  at ${timeNow}`;
        activityLog.appendChild(logEntry);
        // Alert Message 'Congrats'
        if (completedTasks === 6) {
          alert("Congrats!!! You have completed all the current task");
        }
      }
    });
}
// Clear History
clearHistoryBtn.addEventListener("click", function () {
  const logEntries = activityLog.querySelectorAll("h1");
  logEntries.forEach((entry) => entry.remove());
});
