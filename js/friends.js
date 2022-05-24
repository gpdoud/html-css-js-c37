class Friend {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    toTr() {
        return "<tr>"
            + `<td>${this.name}</td>`
            + `<td>${this.email}</td>`
            + `<td>${this.phone}</td>`
            + "</tr>";
    }
}

let friends = [
    new Friend("Cindy", "cindy@gmail.com", "876-555-1212"),
    new Friend("Nick", "nick@gmail.com", "367-555-1212"),
    new Friend("Ken", "ken@gmail.com", "435-555-1212")
];

const display = () => {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let f of friends) {
        tbody.innerHTML += f.toTr();
    }

}