import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Model from './master/utils/models/cop.models';
import { CopeService } from './master/utils/service/cop.service';
import { NotyGlobal } from 'src/app/master/utils/global/index.global';
import { InitGlobal } from 'src/app/master/utils/global/index.global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Copelme';
  forma: FormGroup;
  habilitar: boolean = true;
  ctrlDiar: Model.CtrlDiaTModels[];
  prodCtrl: Model.ProdTModels[];
  EditTraspSald: any;
  @ViewChild('selectId') myButton: ElementRef;

  constructor(
    private anoteS: CopeService,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private notyG: NotyGlobal,
    private initG: InitGlobal
  ) {
    this.ctrlDiar = JSON.parse(localStorage.getItem('ctrlDiario')) || [];
    this.prodCtrl = JSON.parse(localStorage.getItem('prodCtrol')) || [];
    this.crearFormulario();
    setTimeout(() => {
      this.notyG.noty('success', 'Bienvenido ', 3000);
    }, 1000);
  }

  crearFormulario() {
    this.forma = this.fb.group({
      descripcion: ['', [Validators.required]],
    });
  }

  habiDatos(): boolean {
    if (this.habilitar) {
      this.renderer.removeAttribute(this.myButton.nativeElement, 'disabled');
      this.initG.select();
      this.habilitar = false;
    } else {
      this.renderer.setAttribute(
        this.myButton.nativeElement,
        'disabled',
        'true'
      );
      this.initG.select();
      this.habilitar = true;
    }
    return this.habilitar;
  }

  editar(dato: Model.InsumoModels) {
    this.EditTraspSald = dato.insumo;
    console.log('dato', dato);
    console.log('editar', this.EditTraspSald);
  }

  guardar(tipo: string) {
    console.log('guardar', tipo);
  }
}
