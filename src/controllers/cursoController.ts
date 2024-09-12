import { Request, Response } from 'express';
import { AppDataSource } from '../db/conexion';
import {Curso} from '../models/CursoModel'

const CursoRepository = AppDataSource.getRepository(Curso);

  export const consultarTodos= async (req:Request, res:Response) =>{
        try {
            //trae todos los datos de la tabla
            const curso = await CursoRepository.find();
            res.json(curso);
            if (!curso){
                throw new Error('Curso no encontrado')
            }
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
  }

    export const consultarUno= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta un prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const insertar= async (req:Request, res:Response) =>{
        try {
        const curso= CursoRepository.create(req.body);
          const result=await CursoRepository.save(curso);
          res.json(result); 
          if (!curso){
            throw new Error ('Curso no encontrado')
          } 
         
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
  

    export const modificar= async (req:Request, res:Response) =>{
        try {
          res.json('modifica prof');
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
