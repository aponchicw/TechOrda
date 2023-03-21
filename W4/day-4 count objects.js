function getCount(objects) {
    let count = 0;

    Object.keys(objects).forEach((key, index) => {
        if (objects[key].x === objects[key].y) {
            count++;
        }
    });

    return count;
}
