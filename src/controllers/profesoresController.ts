import { Request, Response } from 'express';
import { AppDataSource } from '../db/conexion';
import {Profesor} from '../models/ProfesorModel'

const profesoresRepository = AppDataSource.getRepository(Profesor);

  export const consultarTodos= async (req:Request, res:Response) =>{
        try {
            //trae todos los datos de la tabla
            const profesores = await profesoresRepository.find();
            res.json(profesores);
            if (!profesores){
                throw new Error('Profesor no encontrado')
            }
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarUno= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta un profesor');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    


    export const insertar= async (req:Request, res:Response) =>{
        try {
        const profesor=profesoresRepository .create(req.body);
          const result=await profesoresRepository.save(profesor);
          res.json(result);
          res.json('inserta profesor');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const modificar= async (req:Request, res:Response) =>{
        try {
          res.json('modifica profesor');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
    export const eliminar= async (req:Request, res:Response) =>{
        try {
          res.json('elimina prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
