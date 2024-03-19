import { Routes } from '@angular/router';
import { ListaPostComponent } from './components/lista-post/lista-post.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
    {path:'posts', component:ListaPostComponent},
    {path:'new',component: FormularioComponent}
];
