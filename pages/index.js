const taskForm = document.querySelector(".to-do-box__form");
const taskInput = document.querySelector(".to-do-box__input");
const tasksList = document.querySelector(".tasks__list");

function createNewTask() {
  const newTaskContainer = document
    .getElementById("tasks-template")
    .content.querySelector(".task")
    .cloneNode(true); // template находим здесь, потому что он должен отрисовываться с каждым новым сабмитом, при объявлении за границей функции он отрисуется только один раз и будет все время заменяться

  const taskTitle = newTaskContainer.querySelector(".task__title");
  taskTitle.textContent = taskInput.value; // подставляем то, что ввели в инпуте

  const deleteTaskButton = newTaskContainer.querySelector(".task__delete");
  deleteTaskButton.addEventListener("click", () => {
    newTaskContainer.remove();
  });


  tasksList.append(newTaskContainer); // определяем, куда вставим template
}

taskForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  createNewTask();

  taskInput.value = ""; // очищаем инпут именно после вызова функции, а то всё очистится раньше времени, и добавится пустая задача
});
