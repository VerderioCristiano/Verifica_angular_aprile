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
    {nome:'fragola', immagine:'./assets/fragole.jpg', categoria:'alimentari', bool: false, costo:'10$',quantità:'restanti: 30', marca:'solare',},
    {nome:'mela', immagine:'./assets/mela.jpg', categoria:'alimentari', bool: false, costo:'5$',quantità:'restanti: 20',marca:'melinda',},
    {nome:'passeggino', immagine:'./assets/passeggino.jpg', categoria:'nonAlimentari', bool: false, costo:'50$', quantità:'restanti: 15',marca:'chicco',},
    {nome:'ruota', immagine:'./assets/ruota.jpg', categoria:'nonAlimentari', bool: false, costo:'20$',quantità:'restanti: 10',marca:'Michelin',},
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
