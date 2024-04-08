import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  prodotti = [
    {nome:'fragola', immagine:'./assets/fragole.jpg', categoria:'alimentari', bool: false, costo:'10$',quantita:'restanti: 30', marca:'solare',desc:'una classica fragola in grado di sprigionare un sapore in bocca fantastico, gustatene quante ne volete, ma attenti a non mangiarne troppe altrimenti..'},
    {nome:'mela', immagine:'./assets/mela.jpg', categoria:'alimentari', bool: false, costo:'5$',quantita:'restanti: 20',marca:'melinda',desc:'la mela è il più comune tra i frutti da tavolo, e queste mele sono le più gustose in città. '},
    {nome:'passeggino', immagine:'./assets/passeggino.jpg', categoria:'nonAlimentari', bool: false, costo:'50$', quantita:'restanti: 15',marca:'chicco',desc:'Il passeggino è una specie di seggiolino con ruote per portare a passeggio i bambini piccoli sino a circa 36 mesi di età. In commercio ne esistono diversi tipi: a tre o a quattro ruote, leggeri, superleggeri, gemellari, trio in combinazione di navicella e seggiolino auto. '},
    {nome:'ruota', immagine:'./assets/ruota.jpg', categoria:'nonAlimentari', bool: false, costo:'20$',quantita:'restanti: 10',marca:'Michelin', desc:'La ruota è un organo meccanico a forma circolare che, attraverso la rotazione attorno ad un asse, consente di sostituire il moto di strisciamento con il moto di rotolamento. ',},
    ]
  
  click(prodotti: {nome: string}){
    if(prodotti.nome == "fragola"){
      this.prodotti[0].bool = true
  
    }else if(prodotti.nome == "mela"){
      this.prodotti[1].bool = true
    }else if(prodotti.nome == "passeggino"){
      this.prodotti[2].bool = true
    }
    else if(prodotti.nome == "ruota"){
      this.prodotti[3].bool = true
    }
  }

    indietro(){
      this.prodotti[0].bool=false
      this.prodotti[1].bool=false
      this.prodotti[2].bool=false
      this.prodotti[3].bool=false
      this.prodotti[4].bool=false
      this.prodotti[5].bool=false
    
  
  } 
}
