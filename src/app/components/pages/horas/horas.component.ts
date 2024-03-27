import { Component, OnInit } from '@angular/core';
import { PontosService } from '../../../services/Pontos/pontos.service';
import { Pontos } from '../../../models/Pontos';
import { ColaboradorService } from '../../../services/Colaborador/colaborador.service';
import { Colaborador } from '../../../models/Colaboradores';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';
import { MessagesService } from '../../../services/Messages/messages.service';



@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css'
})
export class HorasComponent implements OnInit  {

  ponto!: Pontos
  Colaboradores: Colaborador[] = []
  colaborador: Colaborador | null = null
  colaboradorSelecionado: Number = 0; 
  horasForm!: FormGroup
  formValido = false
 
 
  constructor(
    private pontosService: PontosService, 
    private colaboradorService: ColaboradorService,
    private messageService: MessagesService,
    ){}

 ngOnInit(): void {
  
  this.colaboradorService.getColaboradores().subscribe((items) => {
    const data = items.dados
    this.Colaboradores = data

  })

  this.horasForm = new FormGroup({
    id: new FormControl(this.ponto ? this.ponto.id : 0, [Validators.required] ),
    colaboradorId: new FormControl<number>(this.colaborador?.id ? this.colaborador.id: 0, [Validators.required]),
    hEntrada: new FormControl<Date | null>(new Date(), ),
    hSaida: new FormControl<Date | null>(new Date(),)

  })

console.log(new Date())
 }

 submit(){
  // console.log(this.horasForm.value.colaboradorId)

  if(this.horasForm.value.colaboradorId !== 0 ){
    this.pontosService.creatPontos(this.horasForm.value).subscribe((item) =>{
      this.messageService.add("Colaborador acabou de bater ponto")
    console.log("Fomulário envivado para o Banco")
    console.log(this.horasForm.value)
   })   
  }
  this.messageService.add("Ponto não batido, primeiro escolha um Colaboarodor!") 
 }


  

}
