$().ready(() => {
    console.log("jQuery is ready!");
    getUsers();
});

let users;

const getUsers = () => {
    $.getJSON("http://localhost:5000/api/users")
        .done((res) => {
            console.debug(res);
            users = res;
            display();
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = () => {
    let tbody = $("#users");
    for(let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId);
        let tdFn = $(`<td>${user.firstname}</td>`);
        tr.append(tdFn);
        let tdLn = $(`<td>${user.lastname}</td>`);
        tr.append(tdLn);
        let tdUn = $(`<td>${user.username}</td>`);
        tr.append(tdUn);
        let tdRv = $(`<td>${(user.isReviewer ? "Yes" : "No")}</td>`);
        tr.append(tdRv);
        let tdAd = $(`<td>${(user.isAdmin ? "Yes" : "No")}</td>`);
        tr.append(tdAd);

        tbody.append(tr);
    }
}