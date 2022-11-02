
var productos = [
    { ID: 1, codi: "A001", Nom: "Adbocat", Preu: 5},
    { ID: 2, codi: "P001", Nom: "Pomes", Preu: 2},
   
  ];
const agregarBtn_Uno = document.getElementById('agregar');
const tabla = document.getElementById('tablaGeneral');
var table = [""];
var id = document.getElementById("id");



agregarBtn_Uno.addEventListener('click',()=>{
  for(i=0; i<table.length; i++){
   
    if(productos[0].ID == 1){
     r = 5;
      tabla.insertRow(-1).innerHTML =  '<tr>'+'<td>'+ productos[0].codi+ '</td>'+ '<td>'+productos[0].Nom + '</td>'+'<td >'+productos[0].Preu+'<td><input type="number"id="Quantitat" value="1"></input></td>'+'<td><input type=number readonly id="Total">'+'</input</td>';
      var m1 = document.getElementById("Quantitat").value
     r = m1*productos[1].Preu;
  
      document.getElementById("Total").value = r;
      
    }else if(productos[1].ID == 2){
      r = 5;
       tabla.insertRow(-1).innerHTML =  '<tr>'+'<td>'+ productos[0].codi+ '</td>'+ '<td>'+productos[1].Nom + '</td>'+'<td >'+productos[1].Preu+'<td><input type="number"id="Quantitat" value="1"></input></td>'+'<td><input type=number readonly id="Total">'+'</input</td>';
       var m1 = document.getElementById("Quantitat").value
      r = m1*productos[1].Preu;
   
       document.getElementById("Total").value = r;
       
     }
   
    
    
    
    
  }
})
function Multiplicar(){
  var m1 = document.getElementById("Quantitat").value
  r = m1*productos[0].Preu;
  
      document.getElementById("Total").value = r;

}

