import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccount } from '../interfaces/bankAccountInterface';
import { BankAccountService } from '../services/bankAccountService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <div class="bank-accounts-container">       
      <div class="text-center"> 
        <h2>Bank Accounts</h2>      
      </div> 
      <ul class="accounts-list"> 
        <ng-container *ngIf="this.bankAccountList.length == 0" class="d-flex justify-content-center align-items-center">
          <p>Não há contas cadastradas</p>
        </ng-container>
        <li *ngFor="let account of this.bankAccountList" class="account-item">
          <span class="account-bank">{{ account.accountNumber }}</span>
          <span class="account-number">{{ account.agency }}</span>
          <span class="account-balance">{{ account.code}}</span>          
        </li>
      </ul>
    </div> 
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private bankAccountService: BankAccountService) { }

  public bankAccountList: BankAccount[] = [];

  ngOnInit() {
    this.getBankAccountList();
  }

  getBankAccountList(): void {
    this.bankAccountList = this.bankAccountService.getBankAccountList();
  }
}
