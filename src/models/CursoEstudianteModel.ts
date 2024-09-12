import { Column, PrimaryColumn, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Curso } from './CursoModel';
import { Estudiante } from './EstudianteModel';

//entidades
@Entity('curso_estudiantes')
export class CursoEsudiante{
    @PrimaryColumn()
    profesor_id:number;

    @PrimaryColumn()
    curso_id:number;

    @Column({type:'float', default:()=>0})
    nota:number;

    @Column({type:Date, default:()=>'CURRENT_TIMESTAMP'}) //PARA FECHA ACTUAL
    fecha:Date;
    
    //relacionesº
    @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.cursos)
    @JoinColumn({name:'estudiante_id'})
    public estudiante:Estudiante;

    @ManyToOne(()=>Curso,(curso)=>curso.estudiantes)
    @JoinColumn({name:'curso_id'})
    public curso:Curso;

}