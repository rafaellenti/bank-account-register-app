import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BankService {
    private bankApi = 'https://brasilapi.com.br/api/banks/v1';

    constructor(private http: HttpClient) { }

    getBanksList(): Observable<any> {
        return this.http.get(this.bankApi);
    }

    getBank(code: number): Observable<any> {
        return this.http.get(`${this.bankApi}/${code}`);
    }
}