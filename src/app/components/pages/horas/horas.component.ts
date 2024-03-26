import { Component, OnInit } from '@angular/core';
import { PontosService } from '../../../services/Pontos/pontos.service';
import { Pontos } from '../../../models/Pontos';
import { ColaboradorService } from '../../../services/Colaborador/colaborador.service';
import { Colaborador } from '../../../models/Colaboradores';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Console } from 'console';



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
 
 
  constructor(private pontosService: PontosService, private colaboradorService: ColaboradorService){}

 ngOnInit(): void {
  
  this.colaboradorService.getColaboradores().subscribe((items) => {
    const data = items.dados
    this.Colaboradores = data

  })

  this.horasForm = new FormGroup({
    id: new FormControl(this.ponto? this.ponto.id : 0, ),
    colaboradorId: new FormControl<number>(this.colaborador?.id? this.colaborador.id: 0),
    hEntrada: new FormControl<Date | null>(new Date(), [Validators.required]),
    hSaida: new FormControl<Date | null>(new Date(), [Validators.required]),

  })

console.log(new Date())
 }

 submit(){
  console.log(this.horasForm.value)
  this.pontosService.creatPontos(this.horasForm.value).subscribe((item) =>{
    // console.log(item)
   })
 }


  

}
