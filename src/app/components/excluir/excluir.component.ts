import { Component, Inject, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/Colaborador/user.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Colaborador } from '../../models/Colaboradores';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {


  inputData: any;
  colaborador!: Colaborador

  constructor(
    private colaboradoresService: ColaboradorService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
    ){

  }

  ngOnInit(): void {
    this.inputData = this.data

    this.colaboradoresService.getColaborador(this.inputData.id).subscribe((data) => {
      this.colaborador = data.dados
    })
    
  }

  excluir(){
    this.colaboradoresService.deleteColaborador(this.inputData.id).subscribe((data) => {
    this.ref.close
    window.location.reload()
  })
  }

  cancelar() {
    window.location.reload()

  }
}
