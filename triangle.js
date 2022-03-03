function triangulos(){
    var base=document.getElementById('base').value;
    var altura=document.getElementById('altura').value;
    var validation  = false;
    var msg = '';
    //Validación de los campos imputs
    if (base == '') {
        validation = false;
        msg = msg + '<li>El campo Base no puede estar vacío.</li>'
    }if (altura == '') {
        validation = false;
        msg = msg + '<li>El campo Altura no puede estar vacío.</li>'
    }else {
        validation = true;
    }
    //Ejecución del calculo del area.
    if (validation == false) {
        document.getElementById('error').innerHTML='Error:<br/><ul>' + msg + '</ul>';
    }else {
        area = base * altura / 2;
        document.getElementById('error').style.display= 'none';
        document.getElementById('solucion').innerHTML='El área del Triangulo es: '+area+' cm';
    }
}


    function prompter() {
        var reply = prompt('Hey ¿cuál es tu nombre?', '')
        alert ( 'Un placer conocerte ' + reply + '!')
        }
