export class Pontos {
    id?: number
    colaboradorId?: number
    hEntrada?: Date
    hSaida?: Date 

    
   public  get day(  ){
        console.log(typeof this.hEntrada)
        return new Date( )
    }
}

// export class getDay {

//     get entradaDay(){
//         return hEntrada.getDay()
//     }
// }


