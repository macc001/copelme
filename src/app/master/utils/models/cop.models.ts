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
