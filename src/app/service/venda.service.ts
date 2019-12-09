

import { Injectable } from '@angular/core';

import { VendasService } from './vendas.service';
import { VendaModel } from '../providers/model/venda-model';



@Injectable({
    providedIn: 'root'
  })

export class VendaService {

    constructor(
                private vendas: VendasService
        ) {}

    buscarVenda(): Promise<VendaModel> {
        return this.vendas.listar();
    }
}