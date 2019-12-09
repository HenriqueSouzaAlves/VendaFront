import { VendasService } from './../service/vendas.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-venda-produtos',
  templateUrl: './venda-produtos.component.html',
  styleUrls: ['./venda-produtos.component.css']
})
export class VendaProdutosComponent implements OnInit {

  constructor(private vendaservice: VendasService) { }

  ngOnInit() {
  }

  listar() {
    console.log(this.vendaservice.listar());
  }
}
