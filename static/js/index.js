let url = "https://randomuser.me/api/";
let glbPerson;

let n = document.querySelector(".name");
let s = document.querySelector(".surname");
let e = document.querySelector(".email");
let p = document.querySelector(".phone");
let d = document.querySelector(".dob");
let l = document.querySelector(".location");
let c = document.querySelector(".country");
let img = document.querySelector(".picture")

fetch(url).then(
    function (resp) {
        console.log(resp)

        return resp.json()
    }
).then(
    function (glbPerson) {
        img.setAttribute("src", glbPerson.results[0].picture.large);
        n.innerHTML = glbPerson.results[0].name.first + " " + glbPerson.results[0].name.last;
        e.innerHTML = glbPerson.results[0].email;
        p.innerHTML = "+ " + glbPerson.results[0].phone;
        d.innerHTML = glbPerson.results[0].dob.age + " years";
        l.innerHTML = glbPerson.results[0].location.street.name + " " + glbPerson.results[0].location.street.number;
        c.innerHTML = glbPerson.results[0].location.state + ", " + glbPerson.results[0].location.country;
    }
).catch(
    function (err) {
        console.log(err)
    }
)