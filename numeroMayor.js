var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
alert('El numero mayor es: '+n1);
} else if (n2 > n3) {
alert('El numero mayor es: '+n2);
} else {
alert('El numero mayor es: '+n3);
}
document.write('Los numero que ingreso son: '+n1+','+n2+' y '+n3);