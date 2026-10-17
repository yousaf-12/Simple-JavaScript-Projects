const countE1 = document.querySelector('#counter');
const theme = document.querySelector('#theme');

let count = 0;

function render() {
    countE1.textContent = count;
    countE1.classList.toggle("negative", count < 0);
    countE1.classList.toggle("high", count >= 20);
}

document.querySelector('#plus').addEventListener("click", () => { count++; render()});
document.querySelector('#reset').addEventListener("click", () => { count = 0; render()});
document.querySelector('#minus').addEventListener("click", () => { count--; render()});

theme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    theme.textContent = isDark ? "Light color" : "Dark color";
})