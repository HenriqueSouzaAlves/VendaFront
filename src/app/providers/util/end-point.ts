export class EndPoint {

    private static URL : string = 'http://localhost:9090';

    public static buscarCliente() : any {
        return this.URL + '/clientes';
    }

    public static buscarClienteId() : any {
        return this.URL + '/clientes/{id}';
    }

    public static salvarCliente() : any {
        return this.URL + '/clientes';
    }

    public static buscarProduto() : any {
        return this.URL + '/produtos';
    }

    public static buscarProdutoId() : any {
        return this.URL + '/produtos/{id}';
    }

    public static salvarProduto() : any {
        return this.URL + '/produtos';
    }

    public static buscarVenda() : any {
        return this.URL + '/vendas';
    }

    public static buscarVendaId() : any {
        return this.URL + '/vendas/{id}';
    }

    public static salvarVenda() : any {
        return this.URL + '/vendas';
    }

    public static editarVenda() : any {
        return this.URL + '/vendas';
    }

    public static deletarVenda() : any {
        return this.URL + '/vendas';
    }
    
}