import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/user.service';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent implements OnInit {

  Colaboradores: Colaborador[] = []
  ColaboradoresTodos: Colaborador[] = []


  constructor(private colaboradorService: ColaboradorService){}

  ngOnInit(): void {
    this.colaboradorService.getColaboradores().subscribe((items) => {
      const data = items.dados;
      console.log(items)

      this.Colaboradores = data
    })
  }

}
