import { Injectable } from '@angular/core';
// src="assets/global_assets/js/demo_pages/form_select2.js"
declare function init_select();

@Injectable()
export class InitGlobal {
  select() {
    setTimeout(() => {
      init_select();
    }, 5);
  }
}
