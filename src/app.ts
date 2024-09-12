import express, {Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from "path"



import estudianteRouter from './routes/estudianteRouter';
import profesorRouter from './routes/profesorRoutes';
import cursoRouter from'./routes/cursosRouter';
import inscripcionRouter from'./routes/inscripcionRouter';
//import methodOverride from "method-override";

const port =3000;
const app=express();

//habilitamos pug
app.set('view engine','pug');
app.set('views', path.join(__dirname, '/views'));

//carpeta publica
app.use(express.static('public'));

//app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(morgan('dev'));

app.get('/',(req: Request,res: Response)=>{
    return res.render('layout', {
        pagina:'App Universidad'
    });
});
app.use('/estudiantes', estudianteRouter);
app.use('/profesores',profesorRouter );
app.use('/cursos',cursoRouter );
app.use('/inscripciones',inscripcionRouter);

export default app;