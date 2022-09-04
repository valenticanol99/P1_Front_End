import { Component, OnInit } from '@angular/core';
import { Ficha } from '../model/ficha-clinica';
import { FichasService } from '../service/fichas.service';
@Component({
  selector: 'app-ficha-clinica',
  templateUrl: './ficha-clinica.component.html',
  styleUrls: ['./ficha-clinica.component.css'],
})
export class FichaClinicaComponent implements OnInit {
  public fichas: Ficha[] = [];

  constructor(private fichaService: FichasService) {}

  ngOnInit(): void {
    this.fichaService.getFichas().subscribe((data) => {
      this.fichas = data.datos;
    });
  }
}
