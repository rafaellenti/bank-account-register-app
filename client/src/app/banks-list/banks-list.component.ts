import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank } from '../interfaces/bankInterface';
import { BankService } from '../services/bankService';
import { RoutingNavigation } from '../services/routingNavigation';
import { Subscription } from 'rxjs';
import { RoutesEnum } from '../enum/routesEnum';

@Component({
  selector: 'app-banks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banks-list.component.html',
  styleUrl: './banks-list.component.scss'
})

export class BanksListComponent implements OnInit, OnDestroy {
  public banksList: Bank[] = [];
  subscription: Subscription | undefined;

  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit() {
    this.getBanksList();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  getBanksList(): void {
    this.subscription = this.bankService.getBanksList().subscribe({
      next: (response) => {
        this.banksList = response;
        this.fixBankList();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  fixBankList(): void {
    this.banksList = this.banksList.filter(bank => bank.code != null);

    this.banksList.sort((a: Bank, b: Bank) => {
      const nameA = a.name ?? '';
      const nameB = b.name ?? '';

      return nameA.localeCompare(nameB);
    });
  }
} 