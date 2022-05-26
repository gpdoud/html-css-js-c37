let sum = 0;

const accum = () => {
    sum  += +document.getElementById("inp").value;
    show(sum);
}
const reset = () => {
    sum = 0;
    show(sum);
}
const show = (answer) => {
    document.getElementById("sum").innerText = answer;
}