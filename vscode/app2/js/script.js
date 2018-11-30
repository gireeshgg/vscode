var j=0;
var productDetails=[];
productDetails[0]=[];
productDetails[1]=[];
productDetails[2]=[];
var backgroundColoring=['#8686E5',"#A0A0C8"];


function adding(){
  var product = document.getElementById("select1").value;
  if("Mobile"==product){
    i=0;
  }else if("Camera"==product){
    i=1;
  }else{
    i=2;
  }
productDetails[i].push(document.frm.pid.value);
productDetails[i].push(document.frm.pname.value);
productDetails[i].push(document.frm.price.value);
}




function addProduct(){
document.getElementById('dropDown').style.display="block";
document.getElementById('tablep').style.display="none";
document.getElementById('wlcm').style.display="none";

}
function viewProduct(){
  document.getElementById('dropDown').style.display="none";
  document.getElementById('tablep').style.display="block";
  document.getElementById('wlcm').style.display="none";  
}

function adds(){
   var i;
  var product = document.getElementById("select2").value;
  if("Mobile"==product){
    i=0;
  }else if("Camera"==product){
    i=1;
  }else{
    i=2;
  }
  var table = document.getElementById("vproducts");
  for(var z = table.rows.length - 1; z > 0; z--)
    {
        table.deleteRow(z);
    }
  for( k=0  ;k<productDetails[i].length;){
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();

  cell1.innerHTML = productDetails[i][k++];
  cell1.style.backgroundColor=backgroundColoring[j%2];
  cell1.style.height='20px';
  cell1.style.width='30%';
  cell1.style.color='white';
  cell2.innerHTML = productDetails[i][k++];
  cell2.style.backgroundColor=backgroundColoring[j%2];
  cell2.style.height='20px';
  cell2.style.width='30%';
  cell2.style.color='white';
  cell3.innerHTML = productDetails[i][k++];
  cell3.style.backgroundColor=backgroundColoring[j%2];
  cell3.style.height='20px';
  cell3.style.width='30%';
  cell3.style.color='white';
 
  j++;
  }
  alert(table.innerHTML);
}


