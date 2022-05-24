var scores = [];

const add = () => {
    let topicCtrl = document.getElementById("topic");
    let topicx = topicCtrl.value;
    let scorex = document.getElementById("score").value;
    let obj = {
        topic: topicx,
        score: scorex
    }
    scores.push(obj);
    display();
}

const display = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let obj of scores) {
        let tr = "<tr>";
        tr += `<td>${obj.topic}</td>`;
        tr += `<td>${obj.score}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}