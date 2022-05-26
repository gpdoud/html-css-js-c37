
const answer = (ans) => {
    document.getElementById("ans").value = ans;
}

const get = () => {
    // get the values from each input box
    let op1 = +document.getElementById("op1").value;
    let op2 = +document.getElementById("op2").value;
    // put both values in an array
    let ops = [ op1, op2 ];
    // return the array
    return ops;
}

const add = () => {
    // get() returns the array; store it in a variable
    let arr = get();
    // add the two items in the array
    let result = arr[0] + arr[1];
    // display the answer (result) 
    answer(result);
}
const sub = () => {
    let arr = get();
    let result = arr[0] - arr[1];
    answer(result);
}
const mult = () => {
    let arr = get();
    let result = arr[0] * arr[1];
    answer(result);
}
const div = () => {
    let arr = get();
    let result = arr[0] / arr[1];
    answer(result);
}

