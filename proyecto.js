
//saludamos al comprador
function saludar(){
    let nombre=prompt('Cual es tu nombre?');
    console.log('Buenas noches '+nombre);
}


//invoco a la funcion
saludar(); 


let remeras = prompt('Ingresa la remera y te dire el precio');

if (remeras == 'remera oversize WheyFit'){
    console.log('remera oversize WheyFit ... $ 4500');
}else if(remeras == 'remera blanca WheyFit'){
    console.log('remera blanca WheyFit .... $ 4000');
}else if(remeras == 'remera azul WheyFit'){
    console.log('remera azul WheyFit ... $ 4000');
}else{
    console.log('Remera sin stock');
}

//funcion
let precio1=4500;
let precio2=4000;
let precio3=4000;
let total=precio1+precio2+precio3;

function calcularTotalConIva(totalCompra){
    let totalConIva=totalCompra * 1.21;
    console.log('Promocion! El total con iva de las 3 remeras es $'+totalConIva);
}

calcularTotalConIva(total);


let mancuernas = prompt('Ingresa la mancuerna y te dire el precio (s para salir)');
while (mancuernas!='s'){
    switch(mancuernas){
        case '5kg':
            alert('mancuerna 5kg $2000');
            break;
        case '7.5kg':
            alert('mancuerna 7.5kg $10965');
            break;
        case '10kg':
            alert ('mancuerna 10kg $14600');
            break;
        case '15kg':
            alert ('mancuerna 15kg $21900');
            break;
        case '17.5kg':
            alert ('mancuerna 17.5kg $26250');
            break;
        default:
            alert('Producto sin stock');
            break;
    }
    mancuernas = prompt('Ingresa la mancuerna y te dire el precio (s para salir)');
}


class Producto{
    constructor(marca, producto, precio){
        this.marca = marca;
        this.producto = producto;
        this.precio = precio;
    this.mostrarSuplementos = function(){
        alert(this.marca + ' ' +this.producto + ' ' + this.precio);
        }
    }
}

const p1 = new Producto('Star Nutricion','Whey Protein 3kg','$16900');
const p2 = new Producto('Star Nutricion','Mutant Mass 5kg','$11900');
const p3 = new Producto('Star Nutricion','Creatina 300g','$8800');
const p4 = new Producto('ENA','Whey Protein 1kg','$5100');
const p5 = new Producto('ENA','UltraMass 3kg','$7000');
const p6 = new Producto('ENA','Creatina sin sabor 60 serv','$7200');

const productos = [p1,p2,p3,p4,p5,p6];
console.log(productos);
