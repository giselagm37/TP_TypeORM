//npm init -y                 package.json
//npm i typescript -D         complilador dependencia de desarrollo
//tsc --init                  inicilizamos para typescript tsconfig.json 
//npm i ts-node-dev           compilacion automatica con js  
//modifico el script
//npm i express               
//npm i cors
//npm i morgan                 login de lo que se pida a la API
//
//npm i @types/express -D      le dice los tipos de datos para que soporte los datos
//npm i @types/cors -D         para que typescripct trabaje con cors
//npm i @types/morgan -D       para que typescript trabaje con morgan

// npm run dev

//TYPEORM
//npm install typeorm --save
//npm install reflect-metadata --save
//npm install @types/node --save-dev

//npm install mysql2 --save


import app from "./app"
import {intializeDatabase} from './db/conexion'
import * as dotenv from 'dotenv';
dotenv.config();
const port=parseInt(process.env.PORT || '6505',10);
const host=process.env.HOST || '0.0.0.0';

//llamada listen
async function main(){
    try{
        await intializeDatabase();
        console.log('Base de datos conectada');

        app.listen(port,host, ()=>{
            console.log(`Servidor activo en puerto ${port}`);
        })
    }
    catch(err:unknown){
         if(err instanceof Error){
            console.log('Error al conectar la BD ',err.message);
         }
    }
    

}

main();