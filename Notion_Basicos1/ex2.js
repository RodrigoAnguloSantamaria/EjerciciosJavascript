//VARIABLES PARA PASAR A LA FUNCION
let age=19;
let haveCarnet=false;

function canDrive(age, haveCarnet){
    if((age>18) && (haveCarnet)){
        console.log("puedes conducir");
    }
    else{
        console.log("no puedes conducir");
    }
}
canDrive(age,haveCarnet);