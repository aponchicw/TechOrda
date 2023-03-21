const modal = document.querySelector("#modal");
const btn = document.querySelector("#open-modal");
const span = document.querySelector(".close");

const file = document.querySelector("#file");
const uploadButton = document.querySelector("#upload");
const success = document.querySelector("#success-message");
const error = document.querySelector("#error-message");
const uploadMessage = document.querySelector("#upload-message");
const msg = document.querySelector("#entertain-message");

const scamDir = document.querySelector("#scammed");
const scamPhotos = document.querySelector("#scam-photos");
const uploadText = document.querySelector("#upload-text");

const secret = document.querySelector(".secret");
const input = document.querySelector("input");

const messages = [
    { text: "Upload two more files", code: 128522, close: false },
    { text: "Upload one more files", code: 128526, close: false },
    { text: "Error ", code: 128543, close: true },
];

let index = 0;

btn.addEventListener("click", (e) => {
    modal.style.display = "block";
    success.style.display = "none";
    success.style.display = "none";
});

span.addEventListener("click", (e) => {
    success.style.display = "none";
    error.style.display = "none";
    input.value = "";
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        success.style.display = "none";
        error.style.display = "none";
        input.value = "";
        modal.style.display = "none";
    }
});

function uploadFile(object) {
    return new Promise((resolve, reject) => {
        file.files.length == 0 ? reject() : resolve(object);
    });
}

function promises() {
    const promise = new Promise((resolve) => resolve());

    promise
        .then(() => {
            btn.style.display = "none";
            secret.style.display = "none";
            uploadText.innerText = "3 files were uploaded";
            uploadText.style.color = "white";
        })
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    btn.style.display = "block";
                    secret.style.display = "block";
                    uploadText.innerText = "Upload files";
                    uploadText.style.color = "white";
                    resolve();
                }, 2000);
            });
        });
}

uploadButton.addEventListener("click", async () => {
    if (file.files.length !== 0 && messages[index].close) {
        modal.style.display = "none";
        msg.style.display = "none";
        index = 0;
        promises();
    } else {
        await uploadFile(messages[index])
            .then((object) => {
                error.style.display = "none";
                success.style.display = "block";
                msg.style.display = "block";
                uploadMessage.innerText = object.text;
                index++;
            })
            .catch(() => {
                success.style.display = "none";
                error.style.display = "block";
            });
    }
    input.value = "";
});
