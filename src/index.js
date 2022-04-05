import { qs, create, createElement, clearChildren } from "./helper";

const newProjectFormHTML = qs(".new-project");
const newTaskFormHTML = qs(".new-task");
const newProjectInputHTML = qs(".new-project > input");
const newTaskInputHTML = qs(".new-task > input");
const projectListHTML = qs(".project-section > ul");
const taskListHTML = qs(".task-section > ul");

let selectedProject = -1;

let projects = [
    {
        id: 0,
        title: "foo",
        tasks: [
            {
                id: 0,
                title: "mytask",
                checked: false,
            },
            {
                id: 1,
                title: "foobar",
                checked: true,
            },
            {
                id: 2,
                title: "bababa",
                checked: false,
            },
        ],
    },
    {
        id: 1,
        title: "bar",
        tasks: [
            {
                id: 0,
                title: "myta4fff3sk",
                checked: true,
            },
            {
                id: 1,
                title: "24234234",
                checked: true,
            },
            {
                id: 2,
                title: "babaffefba",
                checked: false,
            },
        ],
    },
    {
        id: 2,
        title: "ying",
        tasks: [],
    },
    {
        id: 3,
        title: "yang",
        tasks: [],
    },
];

function nextProjectId() {
    return projects.length;
}

function addProject(title) {
    if (title.trim() == "") return;

    projects.push({
        id: nextProjectId(),
        title,
        tasks: [],
    });
}

function deleteProject(id) {
    projects = projects.filter((project) => project.id != id);
}

newProjectFormHTML.addEventListener("submit", () => {
    addProject(newProjectInputHTML.value);
    newProjectInputHTML.value = "";
    renderProjects();
});

function renderProjects() {
    clearChildren(projectListHTML);
    projects.forEach((project) => renderProject(project));
}

function renderProject(project) {
    const projectElement = createElement("li", {
        class: "project",
        id: project.id,
    });

    const deleteButton = createElement("button", {
        class: "delete-button-project",
        text: "-",
        for: project.id,
    });

    const projectTitle = createElement("p", {
        class: "project-title",
        text: project.title,
    });

    deleteButton.addEventListener("click", () => {
        deleteProject(project.id);
        if (selectedProject == project.id) {
            selectedProject = -1;
        }

        renderProjects();
        console.log(selectedProject);
        renderTasks();
    });

    projectTitle.addEventListener("click", () => {
        selectedProject = project.id;
        renderTasks();
    });

    projectElement.appendChild(deleteButton);
    projectElement.appendChild(projectTitle);

    projectListHTML.appendChild(projectElement);
}

function renderTasks() {
    clearChildren(taskListHTML);

    if (selectedProject == -1) return;

    const project = projects.find((project) => project.id == selectedProject);

    project.tasks.forEach((task) => renderTask(task));
}

function renderTask(task) {
    const taskElement = createElement("li", {
        class: "task",
        id: "t" + task.id,
    });

    const checkbox = createElement("input", {
        class: "check-task",
        type: "checkbox",
        id: "check" + task.id,
    });

    const taskTitle = createElement("label", {
        class: "task-title",
        text: task.title,
        for: "check" + task.id,
    });

    checkbox.addEventListener("click", () => {
      task.checked = checkbox.checked;
    })

    checkbox.checked = task.checked;
    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTitle);

    taskListHTML.appendChild(taskElement);
}

renderProjects();

renderTasks();
