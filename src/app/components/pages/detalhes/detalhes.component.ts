import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../../services/Colaborador/user.service';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from '../../../models/Colaboradores';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  colaborador?: Colaborador

  constructor(private colaboradorService: ColaboradorService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.colaboradorService.getColaborador(id).subscribe((data) => {
      this.colaborador = data.dados
      // console.log(this.colaborador)
    })
  }
}
