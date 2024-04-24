var miarray =new Array();
var btnAdd=document.getElementById("btnAdd");
var reset=document.getElementById("reset")
var items =document.getElementById("items");
var uns =document.getElementById("uns");
var borra =document.getElementById("borra");
var index =document.getElementById("btnIndex");
var splice =document.getElementById("splice");
var nume =document.getElementById("nums");
var miarray =new Array();

var r=0;
splice.onclick=async()=>{
  const {value:pos} =await Swal.fire({
    title: "SPlICE",
    input: "text",
    inputLabel:"POSICION INICAL?",
    showCancelBitton:true,
    inputValidator: (value)=>{
      if (!value){
        return "ingresa valor valido!";
      }
    }
  });
  
  const {value:n} =await Swal.fire({
    title: "SPlICE",
    input: "text",
    inputLabel:"CUANTOS VALORES?",
    showCancelBitton:true,
    inputValidator: (value)=>{
      if (!value){
        return "ingresa valor valido!";
      }
    }
  });
  
  try{
    miarray.splice(pos,n);
    imprimirArray();
   
  } catch (error) {
    Swal.fire({
      title:"SPLICE",
      text:"ERROR AL ELIMINAR",
      icon:"error"
       
    });
}
}
  
  
  index.onclick=() =>{
    let pos=miarray.indexOf(parseInt(document.getElementById("index").value));
    Swal.fire({
      title:"ARRAY",
      text:"POSICION:"+pos,
      icon:"succes"
    })
  }
  
  




btnAdd.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.push(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+="<h3>"+miarray[i]+"</h3>";
    
  }
  items.innerHTML=nums;
      nume.innerHTML=r++ +1;
}


reset.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.pop(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+="<h3>"+miarray[i]+"</h3>";
    
  }
  items.innerHTML=nums;
      nume.innerHTML=r-- -1;
}


uns.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.unshift(n);
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+="<h3>"+miarray[i]+"</h3>";
    
  }
  items.innerHTML=nums;
      nume.innerHTML=r++ +1;
}

borra.onclick=() =>{
  var n =parseInt(document.getElementById("item").value);
  
  miarray.shift();
  var nums = "";
  for (var i = 0; i < miarray.length; i++) {
    nums+="<h3>"+miarray[i]+"</h3>";
    
  }
  items.innerHTML=nums;
      nume.innerHTML=r-- -1;
}



const imprimirArray=()=>{    
    let x="";
    for(let i=0;i<miarray.length;i++){
        x+="<h3>"+miarray[i]+"</h3>";
    }
    items.innerHTML=x;
    nume.innerHTML=r++ +1|| r-- -1;
}
