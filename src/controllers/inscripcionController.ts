import { Request, Response } from 'express';
import { AppDataSource } from '../db/conexion';

import {CursoEsudiante} from '../models/CursoEstudianteModel';

const CursoEstudianteRepository = AppDataSource.getRepository(CursoEsudiante);

  export const consultarTodos= async (req:Request, res:Response) =>{
        try {
            //trae todos los datos de la tabla
            const curso = await CursoEstudianteRepository.find();
            res.json(curso);
            if (!curso){
                throw new Error('Inscripcion no encontrada')
            }
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
  }



    export const consultarxAlumno= async (req:Request, res:Response) =>{
        try {
          res.json('Consulta un prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const consultarxCurso= async (req:Request, res:Response) =>{
        try {
          res.json('inserta prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const inscribir= async (req:Request, res:Response) =>{
        try {
          res.json('modifica prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }
    export const cancelarInscripcion= async (req:Request, res:Response) =>{
        try {
          res.json('elimina prof');
        } catch (err: unknown) {
            if (err instanceof Error){
                res.status(500).send(err.message);
            }
        }
    }

    export const calificar= async (req:Request, res:Response) =>{
      try {
        res.json('elimina prof');
      } catch (err: unknown) {
          if (err instanceof Error){
              res.status(500).send(err.message);
          }
      }
  }
