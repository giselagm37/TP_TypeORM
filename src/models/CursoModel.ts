import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Estudiante} from "./EstudianteModel";
import {Profesor} from "./ProfesorModel";


@Entity('cursos')
export class Curso{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;
    
    @Column({type:'text'})
    descripcion?:string;


//relaciones
//muchos cursos tienen un profesor    
    @ManyToOne(()=>Profesor)
    //columna de relacionamiento
    @JoinColumn({name:'profesor_id'})
    profesor:Profesor;

//Muchos estudiantes pueden tener muchos cursos
//necesita una tercera tabla
    @ManyToMany(()=>Estudiante)
//tabla de relacionamiento
    @JoinTable({
        name:'cursos_estudiantes',
        //tabla origen
        joinColumn:{name:'curso_id', referencedColumnName:'id'},
        //tabla destino
        inverseJoinColumn:{name:'estudiante_id', referencedColumnName:'id'}
    })
    estudiantes:Estudiante[];
}
