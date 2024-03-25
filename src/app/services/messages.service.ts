import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = ''
  excluir: string = ''

  constructor() { }

  add(message: string){
    this.message = message


    if(message == "Deseja realmente excluir o Colaborador?"){
      this.excluir = 'ativa'
    } else{
      this.excluir = ''
      setTimeout(() =>{
        this.clear()
      }, 4000)
    }
 
     
 

  }

  clear(){
    this.message = ''

  }
}
