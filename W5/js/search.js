export default function search(array, keyword) {
    let search_result = [];
    array.forEach((element, index) => {
        if (element == keyword) {
            search_result.push(index);
        }
    });
    return search_result;
}
