import { Injectable } from '@angular/core';
import { BankAccount } from '../interfaces/bankAccountInterface';

@Injectable({
    providedIn: 'root'
})

export class BankAccountService {
    private readonly storageKey = 'bankAccounts';

    getBankAccountList(): BankAccount[] {
        const list = localStorage.getItem(this.storageKey);
        return list ? JSON.parse(list) : [];
    }

    saveBankAccount(bankAccount: BankAccount): void {
        const bankAccountList = this.getBankAccountList();
        bankAccountList.push(bankAccount);
        localStorage.setItem(this.storageKey, JSON.stringify(bankAccountList));
    }
}