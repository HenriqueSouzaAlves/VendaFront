import { VendasService } from './../../service/vendas.service';

import { Injectable } from '@angular/core';
import { VendaModel } from '../model/venda-model';



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