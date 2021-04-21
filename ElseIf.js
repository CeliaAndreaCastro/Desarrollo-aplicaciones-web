var edad =prompt('Usuario favor de ingresar tu edad:');
var out=isNaN(edad);

if(out){
    alert('El valor que ingreso no es una edad 👾🤖'); 
}   
   
else if(edad <16){
        alert('Eres muy joven 🧑👩');
}

else if(edad <26){
    alert('Todo un adulto 👨‍🦰👩‍🦰');
    
}

else if(edad<45){
    alert('En tu mejor momento 👨‍💻👩‍💻');
}
else {
    alert('Tienes que cuidarte😷💊');
}
