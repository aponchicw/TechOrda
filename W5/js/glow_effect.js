const handleOnMouseMove = (e) => {
    document.getElementById("keyboard").onmousemove = (e) => {
        for (const key of document.getElementsByClassName("key")) {
            const rect = key.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            key.style.setProperty("--mouse-x", `${x}px`);
            key.style.setProperty("--mouse-y", `${y}px`);
        }
    };
};

export default handleOnMouseMove;
