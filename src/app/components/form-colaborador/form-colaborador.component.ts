import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Colaborador } from '../../models/Colaboradores'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      nome: new FormControl('', [Validators.required]),
      matricula: new FormControl( 0, [Validators.required]),
      cargo: new FormControl('',[Validators.required]),
      salario: new FormControl(0,[Validators.required]),

    })



  }

  submit(){

   this.onSubimit.emit(this.colaboradorForm.value)
   this.messageService.add("Colaborador adicionado com sucesso");
    this.colaboradorForm.reset()
  }


}