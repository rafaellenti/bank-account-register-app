import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank } from '../interfaces/bankInterface';
import { BankService } from '../services/bankService';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
} 