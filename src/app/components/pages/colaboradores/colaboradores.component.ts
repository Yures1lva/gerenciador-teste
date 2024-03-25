import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/Colaborador/user.service';
import { MessagesService } from '../../../services/messages.service';



@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent implements OnInit {

 

  Colaboradores: Colaborador[] = []

  // ColaboradoresTodos: Colaborador[] = []


  constructor(private colaboradorService: ColaboradorService, public messageService: MessagesService){}

  ngOnInit(): void {
    this.colaboradorService.getColaboradores().subscribe((items) => {
      const data = items.dados
      this.Colaboradores = data
     //console.log(this.Colaboradores)


    })
  }

  excluir(){
    this.messageService.add("Deseja realmente excluir o Colaborador?",)
  }


}
