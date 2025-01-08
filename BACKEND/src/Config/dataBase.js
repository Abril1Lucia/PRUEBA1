import mongoose from "mongoose"; 

export async function connectionMongo(){
    
    //try gestiona cuando la respuesta es positivo
    //catch atrapa errores

    try{
        //conectar bases de datos we
         await mongoose.connect(process.env.DB_URL, {dbName:'PRUEBA'} );
        console.log('LOGRAMOS VINCULAR ESTO WE ');

    }catch(error) {
        console.error ('no we, no pudiste ' + error);

    }
}