import { Injectable } from '@angular/core';
import * as Noty from 'src/assets/global/js/noty.min.js';

@Injectable()
export class NotyGlobal {
  noty(tipo: string, mensaje: string, time: number) {
    new Noty({
      text: mensaje,
      theme: 'metroui',
      progressBar: true,
      timeout: time,
      type: tipo,
      layout: 'bottomRight',
      closeWith: ['click', 'button'],
    }).show();
    return true;
  }
}
