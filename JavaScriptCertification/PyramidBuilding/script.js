const characters = ["#", "%", "=", "!", "¤", "@", "*"];
const count = 10;

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function padRow(rowNumber, rowCount) {
    let char = getRandomCharacter();
    return " ".repeat(rowCount - rowNumber) + char.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function generatePattern() {
    const rows = [];
    for (let i = 1; i <= count; i++) {
        rows.push(padRow(i, count));
    }
    document.getElementById("pattern").innerText = rows.join("\n");
}

generatePattern();