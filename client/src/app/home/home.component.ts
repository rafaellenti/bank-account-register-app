import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccount } from '../interfaces/bankAccountInterface';
import { BankAccountService } from '../services/bankAccountService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
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
