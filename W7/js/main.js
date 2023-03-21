const controlButtons = document.getElementsByClassName("control-button");
const radio = document.getElementsByClassName("radio");
const form = document.querySelector(".fetch-form");
const formTitle = document.querySelector("#input-title");
const fetchButton = document.getElementById("fetch-button");
const entity = document.getElementById("entity");
const input = document.querySelector("#input");
const url = "https://jsonplaceholder.typicode.com";

const formData = {
    fetch_entity: null,
    id: null,
};

for (let index = 0; index < controlButtons.length; index++) {
    controlButtons[index].addEventListener("click", controlButton);
}

for (let index = 0; index < radio.length; index++) {
    radio[index].addEventListener("click", (e) => {
        if (e.target.id === "post" && e.target.checked === true) {
            formData.fetch_entity = "posts";
            fetchButton.textContent = "Fetch post";
            formTitle.textContent = "Post ID";
            input.placeholder = "Enter post ID";
            input.disabled = false;
            fetchButton.disabled = false;
        } else if (e.target.id === "user" && e.target.checked === true) {
            formData.fetch_entity = "users";
            fetchButton.textContent = "Fetch user";
            formTitle.textContent = "User ID";
            input.placeholder = "Enter user ID";
            input.disabled = false;
            fetchButton.disabled = false;
        }
    });
}

function controlButton(e) {
    if (e.target.id === "collapse") {
        document.getElementById("collapse-tooltip").innerText = "Expand";
        document.getElementById("collapse-tooltip").id = "expand-tooltip";
        document.getElementById("expanded").id = "collapsed";
        document.querySelector(".window-content").id = "collapsed";

        e.target.id = "expand";
    } else if (e.target.id === "expand") {
        document.getElementById("expand-tooltip").innerText = "Collapse";
        document.getElementById("expand-tooltip").id = "collapse-tooltip";
        document.getElementById("collapsed").id = "expanded";
        document.querySelector(".window-content").id = "expanded";

        e.target.id = "collapse";
    }
}
input.addEventListener("input", (e) => {
    formData.id = e.target.value;
    if (formData.id !== null) {
        document.querySelector("#error").style.display = "none";
    }
});

fetchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (formData.id === null || formData.id === "") {
        document.querySelector("#error").style.display = "block";
    } else {
        if (formData.fetch_entity === "posts") {
            renderPosts(url, formData);
        } else if (formData.fetch_entity === "users") {
            console.log(form.fetch_entity);
            renderUser(url, formData);
        }
    }
});

async function renderPosts(url, data) {
    const post = axios
        .get(`${url}/${data.fetch_entity}/${data.id}`)
        .then((res) => {
            return res;
        });
    const comments = axios
        .get(`${url}/${data.fetch_entity}/${data.id}/comments`)
        .then((res) => {
            return res;
        });

    await post
        .then((res) => {
            document.querySelector(".fetch-container").style.display = "block";
            document.querySelector(".fetch-container").id = "found";
            document.querySelector(".fetch-container").innerHTML = `
        <div class="post">
            <div class="post-header">
                <h2 class="post-title">${res.data.title}</h2>
                <p class="post-author">Author ID: ${formData.id}</p>
            </div>
            <div class="post-body">
                <div class="post-content">${res.data.body}</div>
            </div>
        </div>
        <div class="post-comments">
            <h4>Comments:</h4>
            <ul class="comments"></ul>
        </div>`;
        })
        .catch(() => {
            document.querySelector(".fetch-container").id = "not-found";
            document.querySelector(
                ".fetch-container"
            ).innerHTML = `<p style="color:red;">Post with id: ${formData.id} not found</p>`;
        });

    await comments.then((res) => {
        const comments = document.querySelector(".comments");
        res.data.forEach((element) => {
            const comment = document.createElement("li");
            comment.classList.add("comment");

            const comment_header = document.createElement("div");
            comment_header.classList.add("comment-header");

            const comment_author = document.createElement("p");
            comment_author.classList.add("comment-author");

            comment_author.textContent = element.email;

            comment_header.appendChild(comment_author);
            comment.appendChild(comment_header);

            const comment_body = document.createElement("div");
            comment_body.classList.add("comment-body");

            const comment_content = document.createElement("p");
            comment_content.classList.add("comment_content");
            comment_content.textContent = element.body;

            comment_body.appendChild(comment_content);

            comment.appendChild(comment_body);

            comments.appendChild(comment);
        });
    });
}

function renderUser(url, data) {
    const user = axios
        .get(`${url}/${data.fetch_entity}/${data.id}`)
        .then((res) => {
            return res;
        });
    user.then((res) => {
        document.querySelector(".fetch-container").style.display = "block";
        document.querySelector(".fetch-container").id = "found";
        document.querySelector(".fetch-container").innerHTML = `
        <div class="user">
            <table width="100%">
                <tr class="header-row">
                    <th class="table-header">Info</th>
                    <th class="table-header">User</th>
                </tr>
                <tr>
                    <td class="cell-title">User ID</td>
                    <td class="cell-info">${res.data.id}</td>
                </tr>
                <tr>
                    <td class="cell-title">Username</td>
                    <td class="cell-info">${res.data.username}</td>
                </tr>
                <tr>
                    <td class="cell-title">Full name</td>
                    <td class="cell-info">${res.data.name}</td>
                </tr>
                <tr>
                    <td class="cell-title">Email</td>
                    <td class="cell-info">${res.data.email}</td>
                </tr>
                <tr>
                    <td class="cell-title">Company</td>
                    <td class="cell-info">${res.data.company.name}</td>
                </tr>
            </table>
        </div>`;
    }).catch(() => {
        document.querySelector(".fetch-container").id = "not-found";
        document.querySelector(
            ".fetch-container"
        ).innerHTML = `<p style="color:red;">User with id: ${formData.id} not found</p>`;
    });
}
