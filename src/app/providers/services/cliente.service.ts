import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { ClienteModel } from '../model/cliente-model';
import { EndPoint } from '../util/end-point';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ClienteService {

    constructor(private httpUtil : HttpUtil) {}

    buscaCliente(cliente : ClienteModel) {
        return this.httpUtil.get(EndPoint.buscarCliente());
      }

    buscarClienteId(cliente : ClienteModel) {
        return this.httpUtil.get(EndPoint.buscarClienteId(), [cliente.id]);
    }

    salvarCliente(cliente : ClienteModel) : Observable<any> {
        return this.httpUtil.post(EndPoint.salvarCliente(), cliente);
      }

}

