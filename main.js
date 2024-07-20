const palabras = [
    'coche', 'perro', 'silla', 'libro', 'manos',
    'pluma', 'techo', 'pared', 'suelo', 'lápiz',
    'papel', 'ratón', 'flaco', 'gordo', 'dulce',
    'fruta', 'nieve', 'llave', 'cielo', 'verde',
    'blusa', 'casco', 'reloj', 'avión', 'nubes',
    'amigo', 'panal', 'barco', 'banco', 'arroz',
    'botas', 'artes', 'punto', 'carta', 'campo',
    'china', 'pasta', 'donde', 'banco', 'cerdo',
    'huevo', 'igual', 'jugar', 'koala', 'libra',
    'mango', 'nadar', 'noche', 'reina', 'obvio',
    'padre', 'picar', 'queso', 'rango', 'tabla'
  ]

let numeroAleatorio = Math.floor(Math.random()*palabras.length)
let palabraAleatoria = palabras[numeroAleatorio]
let palabraOculta = [false,false,false,false,false]
let letrasErradas = []


const botonEnviar = document.querySelector("#enviar")
botonEnviar.addEventListener('click', ()=>{
    console.log(palabraAleatoria);
    if (letrasErradas.length >= 8){
        alert("Has perdido, la palabra era: " + palabraAleatoria)
    }else{

        let letraIngresada = document.querySelector("#letra").value
        let hayCoincidencia = false
        for (let i=0; i<palabraAleatoria.length;i++){
            console.log("Revisando la letra:", palabraAleatoria[i]);
            if (letraIngresada == palabraAleatoria[i]){
                //esta parte del codigo crea una variable que trae 
                //los espacios donde se va a mostrar la letra cada que el usuario acierte
                let espacioLetra = document.querySelectorAll('.letra')
                espacioLetra[i].innerHTML = letraIngresada
                console.log("coincidencia en "+ i)
                hayCoincidencia = true
                palabraOculta[i] = true
            }else{
                console.log("no coincidencia en "+ i)
            }
        }
        if(!hayCoincidencia){
            letrasErradas.push(letraIngresada)
            
        }
       
        // esta parte trae una lista de etiquetas span que es donde se va a ir mostrando
        //la letra cada vez que el usuario se equivoque hasta llegar a 8 equivocaciones
        let mostrarLetrasErradas = document.querySelectorAll('.letrasErradas')
        for (let i=0; i<letrasErradas.length;i++){
            mostrarLetrasErradas[i].innerHTML = letrasErradas[i]

        }
        
    
        console.log(letrasErradas)
        console.log(palabraOculta)
    }
    })