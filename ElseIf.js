var edad =prompt('Usuario favor de ingresar tu edad:');
var out=isNaN(edad);

if(out){
    alert('El valor que ingreso no es una edad πΎπ€'); 
}   
   
else if(edad <16){
        alert('Eres muy joven π§π©');
}

else if(edad <26){
    alert('Todo un adulto π¨βπ¦°π©βπ¦°');
    
}

else if(edad<45){
    alert('En tu mejor momento π¨βπ»π©βπ»');
}
else {
    alert('Tienes que cuidarteπ·π');
}
