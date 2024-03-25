import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Colaborador } from '../../models/Colaboradores'; 
import { FormControl, FormGroup } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrl: './form-colaborador.component.css'
})
export class FormColaboradorComponent implements OnInit {
 

@Output() onSubimit = new EventEmitter<Colaborador>();



  colaboradorForm!: FormGroup



  constructor(public messageService: MessagesService){

  }

  ngOnInit(): void {
    
    this.colaboradorForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      matricula: new FormControl(),
      cargo: new FormControl(''),
      salario: new FormControl(),

    })



  }

  submit(){

   this.onSubimit.emit(this.colaboradorForm.value)
   this.messageService.add("Colaborador adicionado com sucesso");
    this.colaboradorForm.reset()
  }


}