let nbr = 0;

const increment = () => {
    get();
    nbr++;
    display();
}
const decrement = () => {
    get();
    --nbr;
    display();
}
const display = () => {
    let inpCtrl = document.getElementById("nbr");
    inpCtrl.value = nbr;
    inpCtrl.style.color = (nbr % 2 === 0) ? "red" : "black";
    inpCtrl.style.fontWeight = (nbr % 3 === 0) ? "bold" : "normal";;
    inpCtrl.style.fontStyle = (nbr % 5 === 0) ? "italic" : "normal";
}
const get = () => {
    let val = +document.getElementById("nbr").value;
    nbr = val;
}