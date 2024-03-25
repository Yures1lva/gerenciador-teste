import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { RelatoriosComponent } from './components/pages/relatorios/relatorios.component';
import { HorasComponent } from './components/pages/horas/horas.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

const routes: Routes = [
  {path:'', component: ColaboradoresComponent},
    {path:'relatorios', component: RelatoriosComponent},
    {path: 'horas', component: HorasComponent},
    {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
