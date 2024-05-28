import { TemplateFormsComponent } from './componentes/template-forms/template-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ProtegidaComponent } from './componentes/protegida/protegida.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'protegida', component: ProtegidaComponent, canActivate: [authGuard]},
  {path: 'contacto', component: TemplateFormsComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
