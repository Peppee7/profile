let url = "https://randomuser.me/api/";
let glbPerson;

let n = document.querySelector(".name");
let s = document.querySelector(".surname");
let e = document.querySelector(".email");
let p = document.querySelector(".phone");
let d = document.querySelector(".dob");
let l = document.querySelector(".location");


function populateUser(obj) {
    // Qui carico l'immagine
    // Prendi con querySelector l'immagine e cambi l'attributo src
}


fetch(url).then(
    function (resp) {
        console.log(resp)

        return resp.json()
    }
).then(
    function (glbPerson) {
        n.innerHTML = glbPerson.results[0].name.first;
        e.innerHTML = glbPerson.results[0].email;
        p.innerHTML = glbPerson.results[0].phone;
        d.innerHTML = glbPerson.results[0].dob.age;
        l.innerHTML = glbPerson.results[0].location.street.name + " " + glbPerson.results[0].location.street.number;
    }
).catch(
    function (err) {
        console.log(err)
    }
)