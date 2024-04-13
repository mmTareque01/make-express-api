function capitalize(word) {
    if (!word) return word; // return original word if it's falsy (e.g., "", null, undefined)
    return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = {capitalize}