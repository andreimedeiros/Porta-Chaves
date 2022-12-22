import { Component, OnInit } from '@angular/core';
import { Key } from 'src/app/shared/model/key';
import { KeysService } from 'src/app/shared/services/keys/keys.service';
import { MensagemService } from 'src/app/shared/services/mensagem/mensagem.service';

@Component({
  selector: 'app-compra-game',
  templateUrl: './compra-game.component.html',
  styleUrls: ['./compra-game.component.scss']
})
export class CompraGameComponent implements OnInit {


  
  keys: Array<Key>

  constructor(private keyService: KeysService, private mensagemService: MensagemService) {
      this.keys =[];
   }


  ngOnInit(): void {
  }


  removerKey(key: Key): void {
    const id = key.id || '';
    this.keyService.removerKey(id).subscribe(
      keyremovida => {
        console.log(keyremovida);
        const indxKey = this.keys.findIndex(k => k.id === key.id);


        if (indxKey > -1) {
          this.keys.splice(indxKey, 1);
        }

      }
    );
  }

}
