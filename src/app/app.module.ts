import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { RelatoriosComponent } from './components/pages/relatorios/relatorios.component';
import { HorasComponent } from './components/pages/horas/horas.component';
import { FormColaboradorComponent } from './components/form-colaborador/form-colaborador.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { EditarComponent } from './components/pages/editar/editar.component';
import { DetalhesComponent } from './components/pages/detalhes/detalhes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ExcluirComponent } from './components/excluir/excluir.component';
// import { TokenInterceptor } from './components/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColaboradoresComponent,
    RelatoriosComponent,
    HorasComponent,
    FormColaboradorComponent,
    CadastroComponent,
    MessagesComponent,
    EditarComponent,
    DetalhesComponent,
    ExcluirComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
