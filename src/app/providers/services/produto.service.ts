import { HttpUtil } from '../util/httpUtil';
import { Injectable } from '@angular/core';
import { ProdutoModel } from '../model/produto-model';
import { EndPoint } from '../util/end-point';
import { ClienteModel } from '../model/cliente-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ProdutoService {

    constructor(private httpUtil : HttpUtil) {}

    buscaProduto(produto : ProdutoModel) {
        return this.httpUtil.get(EndPoint.buscarProduto());
      }

    buscarProdutoId(produto : ProdutoModel) {
        return this.httpUtil.get(EndPoint.buscarProdutoId(), [produto.id]);
    }

    salvarProduto(produto : ProdutoModel) : Observable<any> {
        return this.httpUtil.post(EndPoint.salvarProduto(), produto);
      }

}