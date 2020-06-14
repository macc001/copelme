import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopModels } from './cop.models';
import { CopeService } from './cop.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Copelme';
  forma: FormGroup;
  habilitar: boolean = true;
  ctrlDiar: CtrlDiaTModels[];
  prodCtrl: ProdTModels[];
  @ViewChild('selectId') myButton: ElementRef;

  constructor(
    private anoteS: CopeService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.ctrlDiar = JSON.parse(localStorage.getItem('ctrlDiario')) || [];
    this.prodCtrl = JSON.parse(localStorage.getItem('prodCtrol')) || [];
    this.crearFormulario();
  }
  crearFormulario() {
    this.forma = this.fb.group({
      descripcion: ['', [Validators.required]],
    });
  }

  habiDatos(): boolean {
    // console.log(this.myButton.nativeElement);
    this.renderer.removeAttribute(this.myButton.nativeElement, 'disabled');
    return this.habilitar ? (this.habilitar = false) : (this.habilitar = true);
  }

  editar(dato: InsumoModels) {
    console.log('editar', dato);
  }

  guardar(tipo: string) {
    console.log('guardar', tipo);
  }
}
export interface CtrlDiaTModels {
  codigo: string;
  insumo: string;
  data: InsumoModels[];
}

export class InsumoModels {
  codigo: string;
  insumo: string;
  unidad: string;
  saldoAnt: number;
  traspaso: number;
  totalIns: number;
  consumo: number;
  saldoFin: number;
}
export interface ProdTModels {
  codigo: string;
  nombre: string;
}
