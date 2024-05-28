import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ProtegidaComponent } from './componentes/protegida/protegida.component';

import { AuthModule } from '@auth0/auth0-angular';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { TemplateFormsComponent } from './componentes/template-forms/template-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    ContactoComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-qfrrxmdr6mol6qs4.us.auth0.com',
      clientId: 'B4RFQqgBMUBXinyXlTQeNaFwvMt8eaRJ',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
