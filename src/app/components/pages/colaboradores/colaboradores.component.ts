import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Colaborador } from '../../../models/Colaboradores';
import { ColaboradorService } from '../../../services/Colaborador/colaborador.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../excluir/excluir.component';



@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent implements OnInit {

 

  Colaboradores: Colaborador[] = []

  // ColaboradoresTodos: Colaborador[] = []


  constructor(
    private colaboradorService: ColaboradorService, 
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.colaboradorService.getColaboradores().subscribe((items) => {
      const data = items.dados
      this.Colaboradores = data
     //console.log(this.Colaboradores)


    })
  }

  OpenDialog(id?: number){
    console.log("oi")
    this.dialog.open(ExcluirComponent, {
      width: '550px',
      data: {
        id: id
      }
    })
  }


}
