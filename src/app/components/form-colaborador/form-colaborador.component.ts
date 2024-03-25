import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
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
@Input() btnTitle!: string
@Input() title!: string
@Input() dadosColaborador: Colaborador | null = null ;



  colaboradorForm!: FormGroup



  constructor(public messageService: MessagesService){

  }

  ngOnInit(): void {
    
    this.colaboradorForm = new FormGroup({
      id: new FormControl(this.dadosColaborador? this.dadosColaborador.id : 0),
      nome: new FormControl(this.dadosColaborador? this.dadosColaborador.nome : '', [Validators.required]),
      matricula: new FormControl(this.dadosColaborador? this.dadosColaborador.matricula : 0, [Validators.required]),
      cargo: new FormControl(this.dadosColaborador? this.dadosColaborador.cargo :'',[Validators.required]),
      salario: new FormControl(this.dadosColaborador? this.dadosColaborador.salario : 0,[Validators.required]),

    })



  }

  submit(){

   this.onSubimit.emit(this.colaboradorForm.value)
   this.messageService.add("Colaborador adicionado com sucesso");
    this.colaboradorForm.reset()
  }


}