function getSecondLargest(nums) {
    const unique = nums.filter((value, index, array) => {
        return array.indexOf(value) === index;
    });
    unique.sort(function (a, b) {
        return a - b;
    });
    return unique[unique.length - 2];
}
