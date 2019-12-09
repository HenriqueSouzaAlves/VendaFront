import { VendaModel } from './../providers/model/venda-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9090';
  }

  url: string;

  listar(): Promise<VendaModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(`${this.url}/vendas`, httpOptions).toPromise().then();
  }
}
