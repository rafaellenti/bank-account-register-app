import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank } from '../interfaces/bankInterface';
import { BankService } from '../services/bankService';
import { RoutingNavigationService } from '../services/routingNavigationService';
import { Subscription } from 'rxjs';
import { RoutesEnum } from '../enum/routesEnum';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-banks-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './banks-list.component.html',
  styleUrl: './banks-list.component.scss'
})

export class BanksListComponent implements OnInit, OnDestroy {
  public banksList: Bank[] = [];
  public banksListBackup: Bank[] = [];
  public routesEnum = RoutesEnum;

  subscription: Subscription | undefined;

  searchCodeForm = new FormGroup({
    code: new FormControl('', Validators.required)
  })

  constructor(private bankService: BankService, public routingNavigationService: RoutingNavigationService) { }

  ngOnInit() {
    this.getBanksList();
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

  setBankSearched(bank: Bank) {
    this.banksListBackup = this.banksList;
    this.banksList = [];
    this.banksList.push(bank);
  }

  onSubmit() {
    if (this.searchCodeForm.value.code) {
      this.subscription = this.bankService.getBank(parseInt(this.searchCodeForm.value.code, 10)).subscribe({
        next: (response) => {
          this.setBankSearched(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }

  clearFilter() {
    this.banksList = this.banksListBackup;
    this.banksListBackup = [];
    this.searchCodeForm.reset();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
} 