function speak() {
    const roevered = document.getElementById("output").innerHTML;
    const utterance = new SpeechSynthesisUtterance(roevered);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);
}

function roeversprog() {
    ord = document.getElementById("input").value
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let result = ""

    for (let char of ord) {
        if (consonants.includes(char)) {
            result += char + 'o' + char.toLowerCase()
        } else {
            result += char
        }
    }

    document.getElementById("output").innerHTML = result;
}
