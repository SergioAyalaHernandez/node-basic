function hola(nombre,miCallback){
    setTimeout(function () {
        console.log("Hola, "+nombre);
        miCallback();
    }, 3000);
};

function adios(nombre, otroCallback){
    setTimeout(function (){
        console.log('Adios', nombre);
        otroCallback();
    },1000)
}


console.log('Iniciando proceso...');

hola('Sergio', function (){
    adios('Sergio',() =>{
        console.log('Terminando el proceso');
    })
});


hola('Ismael', ()=>{});
adios('Ismael', ()=>{});