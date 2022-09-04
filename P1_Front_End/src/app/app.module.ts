import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { FichaComponent } from './ficha/ficha.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    FichaComponent,
    ServicioComponent,
    FichaClinicaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
