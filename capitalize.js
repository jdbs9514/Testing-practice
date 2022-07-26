function capitalize(string) {
    const firstCap = string.replace(/^\w/, (c) => c.toUpperCase());
    return firstCap;
}

module.exports = capitalize;