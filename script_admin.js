var listaProduse = [];
             
function drawProduse(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            listaProduse= JSON.parse(this.responseText);
                    
                document.getElementById("loadingImg").style.display = "none";
                document.getElementById("listaProduse").style.display = "block";
            
            var tabel=document.querySelector("#listaProduse tbody");
            var str="";
            for(var i in listaProduse){
                var rand = `<tr>
                                <td><img src="${listaProduse[i].imagine}" class="imagineClass"/></td>
                                <td id="despre">
                                     <span class="numeClass">${listaProduse[i].nume}<br/></span>
                                     <p class="ingredienteClass">${listaProduse[i].ingrediente}</p>
                                </td>
                                <td id="btns">
                                    <a href="edit.html?id=${i}"><button class="btnModifica">MODIFICA</button></a>&nbsp;
                                    <a href="delete.html?id=${i}"><button class="btnSterge">STERGE</button></a>
                                </td>
                             </tr>
                `;
                str +=rand;
            }
            console.log(str);
            tabel.innerHTML=str;
        }
    };
    xhttp.open("GET", "https://meniu-814ca.firebaseio.com/.json", true);
    xhttp.send();
    
	document.getElementById("loadingImg").style.display = "block";
	document.getElementById("listaProduse").style.display = "none";

}
 