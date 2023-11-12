import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccount } from '../interfaces/bankAccountInterface';
import { BankAccountService } from '../services/bankAccountService';
import { RoutingNavigationService } from '../services/routingNavigationService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  constructor(private bankAccountService: BankAccountService, public routingNavigationService: RoutingNavigationService) { }

  public bankAccountList: BankAccount[] = [];

  ngOnInit() {
    this.getBankAccountList();
  }

  getBankAccountList(): void {
    this.bankAccountList = this.bankAccountService.getBankAccountList();
  }
}
