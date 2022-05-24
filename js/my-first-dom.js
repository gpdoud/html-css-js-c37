console.log("Ready!");

let nbrs = [ 5, 2, 6, 3, 8 ];

const clicked = () => {
    let inpCtrl = document.getElementById("inp");
    let inpVal = inpCtrl.value;
    console.log("value is", inpVal);
    let lblCtrl = document.getElementById("outp");
    lblCtrl.innerHTML = `<b>${inpVal}</b>`;

    // add up the numbers here
    let sum = 0;
    for(let n of nbrs) {
        sum += n;
    }
    let nbrsCtrl = document.getElementById("nbr");
    nbrsCtrl.value = sum;
}