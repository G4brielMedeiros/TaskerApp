import { qs, create, createElement, clearChildren } from "./helper";

const newProjectFormHTML = qs(".new-project");
const newTaskFormHTML = qs(".new-task");
const newProjectInputHTML = qs(".new-project > input");
const newTaskInputHTML = qs(".new-task > input");
const projectListHTML = qs(".project-section > ul");

let projects = [
    {
        id: 0,
        title: "foo",
        tasks: [],
    },
    {
        id: 1,
        title: "bar",
        tasks: [],
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

function nextId() {
    return projects.length;
}

function addProject(title) {
    if (title.trim() == "") return;

    projects.push({
        id: nextId(),
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
    projects.forEach((project) => {
        renderProject(project);
    });
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

    deleteButton.addEventListener("click", () => {
        deleteProject(project.id);
        renderProjects();
    });

    const projectTitle = createElement("p", {
        class: "project-title",
        text: project.title,
    });

    projectElement.appendChild(deleteButton);
    projectElement.appendChild(projectTitle);

    projectListHTML.appendChild(projectElement);
}

renderProjects();
