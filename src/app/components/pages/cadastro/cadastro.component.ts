import { Component } from '@angular/core';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/Colaborador/colaborador.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {


  btnTitle = "Cadastrar Colaborador"
  title = "Cadastre um novo Colaborador"
  message = "Colaborador Cadastrado com sucesso!";

  constructor(private colaboradorService: ColaboradorService, ){}

  addColaborador(colaborador: Colaborador){
    console.log(colaborador)
    this.colaboradorService.creatColaborador(colaborador).subscribe((data) =>{
      console.log(data)
    })

  }
}
