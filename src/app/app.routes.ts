import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'Nosotros',component:NosotrosComponent},
    {path:'contacto',component:ContactoComponent}

];
