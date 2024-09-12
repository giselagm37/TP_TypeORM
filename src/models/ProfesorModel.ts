import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Curso} from "./CursoModel";

@Entity('profesores')
export class Profesor{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    dni:string;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    email:string;
    @Column()
    profesion:string;

    @Column()
    telefono:string;
    
    @CreateDateColumn()
    createAt:Date;
    @UpdateDateColumn()
    updateAt:Date;
//relacion 
// Un profesor da un curso pero ese profesor puede dar muchos cursos
//relacion 1 a muchos
     
    @OneToMany(()=>Curso,(curso)=>curso.profesor)
    cursos:Curso[];
}