import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/Colaborador/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  btnTitle= 'Editar'
  title='Edite ou exclua um Colaborador'
  colaborador!: Colaborador 
  message = "Colaborador Editado com sucesso!";

  constructor(private colaboradorService: ColaboradorService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    
    this.colaboradorService.getColaborador(id).subscribe((data) => {
      this.colaborador = data.dados;
    })
  }

  editarColaborador(colaborador: Colaborador){
    this.colaboradorService.updateColaboradores(colaborador).subscribe((data) =>{
      
    })
  }

}
