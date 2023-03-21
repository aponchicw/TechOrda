function vowelsAndConsonants(s) {
    const vowelArray = ["a", "o", "u", "i", "e"];
    const letters = s.split("");

    for (let i = 0; i < letters.length; i++) {
        if (vowelArray.includes(letters[i])) {
            console.log(letters[i]);
        }
    }
    for (let i = 0; i < letters.length; i++) {
        if (!vowelArray.includes(letters[i])) {
            console.log(letters[i]);
        }
    }
}
