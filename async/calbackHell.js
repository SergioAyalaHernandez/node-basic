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
    },1000);
};

function hablar(callbackHablar){
    setTimeout(()=>{
        console.log("bla bla bla bla");
    },1000);
};


console.log('Iniciando proceso...');

hola('Sergio', function (){
    hablar(()=>{}); 
    adios('Sergio', () =>{
        console.log('Terminando el proceso');
    });    
});
