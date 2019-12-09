import { ProdutoModel } from './produto-model';
import { ClienteModel } from './cliente-model';

export class VendaModel {
    id: number;
    produto: ProdutoModel;
    cliente: ClienteModel;
    valorTotal: number;
}