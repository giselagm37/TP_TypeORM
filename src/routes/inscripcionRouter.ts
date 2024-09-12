import express from 'express';
const router=express.Router();
import { calificar, cancelarInscripcion, consultarTodos, consultarxAlumno, consultarxCurso, inscribir } from '../controllers/inscripcionController';

router.get('/',consultarTodos);
router.get('/xAlumno/:id',consultarxAlumno );
router.get('/xCurso/:id',consultarxCurso );

router.post('/',inscribir );
router.put('/',calificar );
router.delete('/:estudiante_id/:curso_id',cancelarInscripcion);

export default router;