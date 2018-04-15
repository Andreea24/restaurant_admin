var listaProduse = [];

function adaugaReteta(form, event) {
   event.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location="admin.html"
        }
    };
    xhttp.open("POST", "https://meniu-814ca.firebaseio.com/.json", true);
    xhttp.send(JSON.stringify({
                nume: form.querySelector("#nume").value,
                imagine: form.querySelector("#pic").value,
                ingrediente: form.querySelector("#ingrediente").value,
                reteta: form.querySelector("#reteta").value,
        }));
}