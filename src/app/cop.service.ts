import { Injectable } from '@angular/core';
import { CopModels } from './cop.models';

@Injectable({
  providedIn: 'root',
})
export class CopeService {
  listasExel: CtrlDiaTModels[] = [
    {
      codigo: '71110',
      insumo: 'MATERIALES DIRECTO DE PREPARACION',
      data: [
        {
          codigo: '26950',
          insumo: 'QUIMIZIME B',
          unidad: 'kg',
          saldoAnt: 129.5,
          traspaso: 0,
          totalIns: 129.5,
          consumo: 0,
          saldoFin: 129.5,
        },
      ],
    },
    {
      codigo: '71110',
      insumo: 'MATERIALES DIRECTO DE LAMINACION',
      data: [
        {
          codigo: '21570',
          insumo: 'RELEASE 64633,61',
          unidad: 'kg',
          saldoAnt: 405,
          traspaso: 0,
          totalIns: 405,
          consumo: 10,
          saldoFin: 395,
        },
        {
          codigo: '21569',
          insumo: 'COATING 64530,61',
          unidad: 'kg',
          saldoAnt: 749,
          traspaso: 0,
          totalIns: 749,
          consumo: 15,
          saldoFin: 734,
        },
        {
          codigo: '21666',
          insumo: 'ANDIMAP',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28211',
          insumo: 'QUIMICONS 1000',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '26774',
          insumo: 'DISPRO 48',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '27304',
          insumo: 'DISPROLOC 620',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '26661',
          insumo: 'ANDIFOAM D500',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '21591',
          insumo: 'AGENTE DE LIMPIEZA 65 OP',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28295',
          insumo: 'REZOSOL 1318',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28307',
          insumo: 'PROSOFT TR3303',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28308',
          insumo: 'HERCOBOND 6363',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28309',
          insumo: 'CREPETROL 3910',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28310',
          insumo: 'CREPETROL M 278',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28311',
          insumo: 'REZOSOL 2008 M',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28275',
          insumo: 'PROSOFT',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '28294',
          insumo: 'HERCOBOND 2000',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '25885',
          insumo: 'ANTIINCRUSTANTE NEXGUAR',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '25886',
          insumo: 'ANTICORROSIVO 19 PULV',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '25887',
          insumo: 'INHIBIDOR CORROSION 355',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
        {
          codigo: '10517',
          insumo: 'SAL GRANULADA',
          unidad: 'kg',
          saldoAnt: 35.4,
          traspaso: 0,
          totalIns: 35.4,
          consumo: 15,
          saldoFin: 35.4,
        },
      ],
    },
    {
      codigo: '71110',
      insumo: 'MATERIALES DIRECTOS DE EFLUENTES',
      data: [
        {
          codigo: '26659',
          insumo: 'FLOCULAN 329',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
        {
          codigo: '26658',
          insumo: 'COAGULANTE POLICAT',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
        {
          codigo: '26660',
          insumo: 'FLOCULAN 3567',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
        {
          codigo: '15570',
          insumo: 'UREA AGRICOLA',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
        {
          codigo: '15571',
          insumo: 'TRIPOLIFOSFATO DE SODIO',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
        {
          codigo: '00000',
          insumo: 'SODA CAUSTICA',
          unidad: 'kg',
          saldoAnt: 78,
          traspaso: 0,
          totalIns: 78,
          consumo: 7,
          saldoFin: 71,
        },
      ],
    },
  ];

  prodExel: ProdTModels[] = [
    {
      codigo: '00000',
      nombre: 'B3001',
    },
    {
      codigo: '00000',
      nombre: 'B3002',
    },
    {
      codigo: '00000',
      nombre: 'B3003',
    },
    {
      codigo: '00000',
      nombre: 'B3004',
    },
    {
      codigo: '00000',
      nombre: 'B3005',
    },
  ];
  constructor() {
    localStorage.setItem('ctrlDiario', JSON.stringify(this.listasExel));
    localStorage.setItem('prodCtrol', JSON.stringify(this.prodExel));
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
