import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { FichaComponent } from './ficha/ficha.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  { path: 'reservas', component: ReservaComponent },
  { path: 'fichas', component: FichaComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'ficha-clinica', component: FichaClinicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
