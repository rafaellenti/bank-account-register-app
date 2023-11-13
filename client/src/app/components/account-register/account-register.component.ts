import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksListComponent } from '../banks-list/banks-list.component';
import { Bank } from '../../interfaces/bankInterface';
import { BankService } from '../../services/bankService';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-register.component.html',
  styleUrl: './account-register.component.scss'
})

export class AccountRegisterComponent implements OnInit {
  subscription: Subscription | undefined;
  private codeId: string | null = null;
  public bank: Bank = {
    ispb: 0,
    name: '',
    code: 0,
    fullName: ''
  };

  constructor(private bankService: BankService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBank();
  }

  getBank(): void {
    this.codeId = this.route.snapshot.paramMap.get('id');

    if (this.codeId) {
      const code = parseInt(this.codeId, 10)

      this.subscription = this.bankService.getBank(code).subscribe({
        next: (response) => {
          this.bank = response;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

  }
}
