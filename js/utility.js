class Utility {

    static parseUrl(url) {
        // split on the question mark
        let parms = (url.split("?")[1]).split;
        return parms;
    }
}

let parms = Utility.parseUrl("http://localhost:5000/test.html?id=1,name=testname");
console.log(parms);