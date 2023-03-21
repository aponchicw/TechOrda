const video = document.querySelector(".video");
const canvas = document.querySelector(".canvas");

const backgroundBlurAmount = 20;
const edgeBlurAmount = 3;
const flipHorizontal = false;

async function startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 512, height: 512 },
    });
    video.srcObject = stream;
    video.play();
    blur(backgroundBlurAmount, edgeBlurAmount, flipHorizontal, 0);
}

async function blur(
    backgroundBlurAmount,
    edgeBlurAmount,
    flipHorizontal,
    interval
) {
    const net = await bodyPix.load();
    const blurInterval = setInterval(async () => {
        const segment = await net.segmentPerson(video);
        bodyPix.drawBokehEffect(
            canvas,
            video,
            segment,
            backgroundBlurAmount,
            edgeBlurAmount,
            flipHorizontal
        );
    }, interval);
}

startVideo();

const pause = document.querySelector("#pause");
const unpause = document.querySelector("#unpause");

pause.addEventListener("click", () => {
    video.pause();
});
unpause.addEventListener("click", () => {
    video.play();
});

document.querySelector(".previous").onclick = function () {
    location.href = "./index.html";
};
