
var produs;
function drawText(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            produs= JSON.parse(this.responseText);
			var tabel=document.querySelector("#container");
			var str="";
            var rand=`
                    <p>Esti pe cale sa stergi preparatul:<span class="numeClass">&nbsp;"${produs.nume}"<br/></span></p>
                    <p>Confirmi stergerea?</p>    
                    <div id="btns">
                        <button id="yes" onclick="confirm()">Da</button>
                        <button id="no" onclick="cancel()">Nu</button>
                    </div>
            `;
            str +=rand;        
            console.log(str);
            tabel.innerHTML=str;
                }
            };
            var idProdus=window.location.search.substring(4);  
			xhttp.open("GET", "https://meniu-814ca.firebaseio.com/"+idProdus+"/.json", true);
			xhttp.send();
		}
function confirm(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    window.location = "admin.html";
                }
            };
            var idProdus =window.location.search.substring(4); 
            xhttp.open("DELETE",  "https://meniu-814ca.firebaseio.com/"+idProdus+"/.json", true);
            xhttp.send();
        
        }	

function cancel(){
            window.location = "admin.html"
        }	
