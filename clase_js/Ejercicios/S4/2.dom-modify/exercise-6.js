const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul = document.createElement("ul");

for (const app of apps) {
    let i = document.createElement("li");
    let content = document.createTextNode(app);
    i.appendChild(content);
    ul.appendChild(i);
}

let body = document.querySelector("body");
body.appendChild(ul);