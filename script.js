function speak() {
    input = document.getElementById("input").value

    roevered = roeversprog(input)
    document.getElementById("output").innerHTML = roevered;

    const utterance = new SpeechSynthesisUtterance(roevered);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);

}

function roeversprog(ord) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let result = ""

    for (let char of ord) {
        if (consonants.includes(char)) {
            result += char + 'o' + char.toLowerCase()
        } else {
            result += char
        }
    }

    return result
}
