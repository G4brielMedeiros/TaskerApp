export function qs(query = "") {
    return document.querySelector(query);
}

export function create(type = "div", classList, textContent, id) {
    const html = document.createElement(type);
    html.classList = classList;
    html.textContent = textContent;
    html.id = id;
    return html;
}

export function createElement(type = "div", options = {}) {
    const element = document.createElement(type);
    Object.entries(options).forEach(([key, value]) => {
        if (key === "class") {
            element.classList.add(value);
            return;
        }

        if (key === "dataset") {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
            return;
        }

        if (key === "text") {
            element.textContent = value;
            return;
        }

        element.setAttribute(key, value);
    });
    return element;
}

export function clearChildren(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}
