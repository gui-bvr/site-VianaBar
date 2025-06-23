const text = "Site em desenvolvimento";
const target = document.getElementById("typewriter");

let index = 0;
function typeWriter() {
    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;