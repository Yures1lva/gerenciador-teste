import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { RelatoriosComponent } from './components/pages/relatorios/relatorios.component';
import { HorasComponent } from './components/pages/horas/horas.component';
import { FormColaboradorComponent } from './components/form-colaborador/form-colaborador.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { provideRouter } from '@angular/router';
// import { TokenInterceptor } from './components/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColaboradoresComponent,
    RelatoriosComponent,
    HorasComponent,
    FormColaboradorComponent,
    SelectUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
