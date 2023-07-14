
document.addEventListener('DOMContentLoaded', function() {
  
  var taskInput = document.getElementById('task-input');
  var taskDeadline = document.getElementById('task-deadline');
  var taskPriority = document.getElementById('task-priority');
  var taskLabel = document.getElementById('task-label');
  var addButton = document.getElementById('add-button');
  var tasksList = document.getElementById('tasks');

 
  addButton.addEventListener('click', function() {
    
    var description = taskInput.value;
    var deadline = taskDeadline.value;
    var priority = taskPriority.value;
    var label = taskLabel.value;

    
    var taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

   
    var descriptionSpan = document.createElement('span');
    descriptionSpan.classList.add('description');
    descriptionSpan.textContent = description;

    var deadlineSpan = document.createElement('span');
    deadlineSpan.classList.add('deadline');
    deadlineSpan.textContent = deadline;

    var prioritySpan = document.createElement('span');
    prioritySpan.classList.add('priority');
    prioritySpan.textContent = priority;

    var labelSpan = document.createElement('span');
    labelSpan.classList.add('label');
    labelSpan.textContent = label;

   
    taskItem.appendChild(descriptionSpan);
    taskItem.appendChild(deadlineSpan);
    taskItem.appendChild(prioritySpan);
    taskItem.appendChild(labelSpan);

    tasksList.appendChild(taskItem);

   
    taskInput.value = '';
    taskDeadline.value = '';
    taskPriority.value = 'low';
    taskLabel.value = '';
  });
});
