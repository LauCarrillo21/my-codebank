//PANELES 
let inicioDeSesion = document.getElementById('inicioDeSesion');;
let inicioOperaciones = document.getElementById('inicioOperaciones');;
let inicioOperacionDeposito = document.getElementById('inicioOperacionDeposito');
let inicioOperacionRetiro = document.getElementById('inicioOperacionRetiro');
let inicioOperacionSaldo = document.getElementById('inicioOperacionSaldo');

//VARIABLES
let usuario;
let contrasena;
let index;
let nuevoSaldo;
let divHijoSaldo;
let retiroH5
let depoH5;
let texto;


const cuentas = [
    {
        nombre: 'Laura',
        saldo: 500,
        password: '9876',
    },
    {
        nombre: 'Angel',
        saldo: 800,
        password: 'hallo',
    },
    {
        nombre: 'Luis',
        saldo: 900,
        password: 'nana',
    },
];

function iniciarSesion() {
    //obtener valores usuario y contraseña
    usuario = document.getElementById('usuario').value;
    contrasena = document.getElementById('contrasena').value;

    function validador(element) {
        return element.nombre === usuario;
    }
    index = cuentas.findIndex(validador);
    cuentas[index];

    //Validacion usuario y contraseña
    if (index === -1) {
        alert('The password and/or username are incorrect. Check your data.')
    } else if (contrasena !== cuentas[index].password) {
        alert('The password and/or username are incorrect. Check your data.')

    } else {
        inicioDeSesion.classList.add('invisible');
        inicioDeSesion.classList.remove('visible');

        inicioOperaciones.classList.add('visible');
        inicioOperaciones.classList.remove('invisible');
    }
};

//click boton DEPOSITAR
function depositar() {

    inicioOperacionDeposito.classList.add('visible');
    inicioOperacionDeposito.classList.remove('invisible');

    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionSaldo.classList.remove('visible');
    inicioOperacionSaldo.classList.add('invisible');

}

//Click REALIZAR DEPOSITO
function cantidadDeposito() {
    let valorADepositar = Number(document.getElementById('valorDeposito').value);
    if (valorADepositar === 0) {
        alert(`Try again! To make a deposit the amount must be greater than $0.00 mxn.`);
    } else if ((cuentas[index].saldo + valorADepositar) > 990) {
        let maximo = 990 - cuentas[index].saldo;
        alert(`You can only deposit $${maximo}.00 mxn to have a max. of $990.00 mxn in your account. `);
    }
    else {

        cuentas[index].saldo = (valorADepositar + cuentas[index].saldo);

        inicioOperacionDeposito.classList.add('invisible');
        inicioOperacionDeposito.classList.remove('visible');
        inicioOperacionSaldo.classList.remove('invisible');
        inicioOperacionSaldo.classList.add('visible');

        divHijoSaldo = document.getElementById('hijoSaldo')
        depoH5 = document.createElement('h5');
        texto = document.createTextNode(`You added: $${valorADepositar}.00 mxn`);
        depoH5.appendChild(texto);
        divHijoSaldo.prepend(depoH5);

        nuevoSaldo = document.getElementById('resultadoSaldo');
        nuevoSaldo.value = `$${cuentas[index].saldo}.00 mxn`;

        divHijoSaldo.removeChild(retiroH5);
    }
}

//click boton RETIRAR
function retirar() {

    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionRetiro.classList.remove('invisible');
    inicioOperacionRetiro.classList.add('visible');

    inicioOperacionSaldo.classList.remove('visible');
    inicioOperacionSaldo.classList.add('invisible');
}

//click REALIZAR RETIRO
function cantidadRetiro() {
    let valorARetirar = Number(document.getElementById('numeroRetiro').value);
    if (valorARetirar === 0) {
        alert(`We know it was a mistake! To make a withdrawal the amount must be greater than $0.00 mxn. Try again ${usuario}!.`)

    } else if ((cuentas[index].saldo - valorARetirar) < 10) {
        let minimo = cuentas[index].saldo - 10;
        alert(`You can only withdraw $${minimo}.00 mxn. Remember, you must have a min. of $10.00 mxn in your account.`)
    } else {

        cuentas[index].saldo = (cuentas[index].saldo - valorARetirar);

        inicioOperacionRetiro.classList.add('invisible')
        inicioOperacionRetiro.classList.remove('visible')
        inicioOperacionSaldo.classList.remove('invisible');
        inicioOperacionSaldo.classList.add('visible');

        divHijoSaldo = document.getElementById('hijoSaldo')
        retiroH5 = document.createElement('h5');
        texto = document.createTextNode(`You withdrew: $${valorARetirar}.00 mxn`);
        retiroH5.appendChild(texto);
        divHijoSaldo.prepend(retiroH5);

        nuevoSaldo = document.getElementById('resultadoSaldo');
        nuevoSaldo.value = `$${cuentas[index].saldo}.00 mxn`;

        divHijoSaldo.removeChild(depoH5);
    }
}

//click CONSULTAR SALDO
function saldo() {
    inicioOperaciones.classList.add('invisible');
    inicioOperaciones.classList.remove('visible');

    inicioOperacionSaldo.classList.add('visible');
    inicioOperacionSaldo.classList.remove('invisible');

    let saldoUsuario = document.getElementById('resultadoSaldo');
    saldoUsuario.value = `$${cuentas[index].saldo}.00 mxn`;
}
//click boton SALIR
function salir() {
    alert('You are exiting your session. We are waiting for you soon!');

    inicioDeSesion.classList.add('visible');
    inicioDeSesion.classList.remove('invisible');

    inicioOperaciones.classList.add('invisible')
    inicioOperacionDeposito.classList.add('invisible')
    inicioOperacionRetiro.classList.add('invisible')
    inicioOperacionSaldo.classList.add('invisible')

    inicioOperaciones.classList.remove('visible')
    inicioOperacionDeposito.classList.remove('visible')
    inicioOperacionRetiro.classList.remove('visible')
    inicioOperacionSaldo.classList.remove('visible')

}