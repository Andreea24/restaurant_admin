
		function modificaReteta(){
            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                        produs= JSON.parse(this.responseText);
                        document.querySelector("#nume").value = produs.nume;
                        document.querySelector("#pic").value = produs.imagine;
                        document.querySelector("#ingrediente").value = produs.ingrediente;
                        document.querySelector("#reteta").value = produs.reteta;
				}
			};
            var idProdus=window.location.search.substring(4); 
            
			xhttp.open("GET", "https://meniu-814ca.firebaseio.com/"+idProdus+"/.json", true);
			xhttp.send();
		}
        function modifica(form, event) {
            event.preventDefault();
            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                    window.location="admin.html"
				}
			};
            var idProdus=window.location.search.substring(4);

			xhttp.open("PUT", "https://meniu-814ca.firebaseio.com/"+idProdus+"/.json", true);
			xhttp.send(JSON.stringify({
					nume: form.querySelector("[name=nume]").value,
					imagine: form.querySelector("[name=url]").value,
					ingrediente: form.querySelector("[name=ingrediente]").value,
					reteta: form.querySelector("[name=preparare]").value,
				}));
		}