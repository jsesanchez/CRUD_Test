import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Location/add/add.component'; 
import { ListarComponent } from './Location/listar/listar.component';
import { EditComponent } from './Location/edit/edit.component';


const routes: Routes = [
  {path: 'add', component:AddComponent},
  {path: 'listar', component:ListarComponent},
  {path: 'editar', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
