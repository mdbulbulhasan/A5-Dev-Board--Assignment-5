let taskAssigned = document.getElementById('taskAssigned');
let checkList = document.getElementById('checkList');
let taskCount = parseInt(taskAssigned.textContent, 10);
let checkCount = parseInt(checkList.textContent, 10);
let activityLog = document.querySelector('.right');
for (let i = 1; i <= 6; i++){
    document.getElementById('btn-card-' + i).addEventListener('click', function(event){
        event.preventDefault()
        if(!this.disable){
            this.style.backgroundColor = 'gray';
            this.disable = true;
            if(taskCount > 0){
                taskCount--;
                taskAssigned.textContent = taskCount.toString();
            }
            checkCount++;
            checkList.textContent = checkCount.toString();

            let taskMessage = document.getElementById('task-' + i).textContent;

            let dateNow = new Date().toLocaleDateString(); 
            let timeNow = new Date().toLocaleTimeString();

            let logEntry = document.createElement('h1');
            logEntry.className = "bg-[rgb(244,247,255)] p-4 rounded-2xl mb-4";
            logEntry.innerHTML = `You have Complete The Task ${taskMessage} at ${dateNow} ${timeNow}`;
            activityLog.appendChild(logEntry);
        }
        
    });
}