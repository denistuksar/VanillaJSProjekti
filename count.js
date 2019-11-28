 document.getElementById("prebroji").addEventListener("click", brojiRijeci);
function brojiRijeci(){
    b=document.getElementById("tekst").value; 
    document.getElementById("rezultat").value=b.split(' ').filter(n => n != '').length;
}