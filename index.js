const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let codeIndex = 0;

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.key === konamiCode[codeIndex]) {
        codeIndex++;
    } else {
        codeIndex = 0;
    }

    if (codeIndex === konamiCode.length) {
        window.location.href = "/breakout.html";
    }
});