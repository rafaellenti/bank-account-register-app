import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bank } from '../../interfaces/bankInterface';
import { BankService } from '../../services/bankService';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BankAccountService } from '../../services/bankAccountService';
import { BankAccount } from '../../interfaces/bankAccountInterface';
import { RoutingNavigationService } from '../../services/routingNavigationService';
import { RoutesEnum } from '../../enum/routesEnum';

@Component({
  selector: 'app-account-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  accountForm = new FormGroup({
    agency: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required)
  })

  constructor(private bankService: BankService, private route: ActivatedRoute, private bankAccountService: BankAccountService, private routingNavigationService: RoutingNavigationService) { }

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

  createAccount(): void {
    if (typeof this.accountForm.value.account === 'string' && typeof this.accountForm.value.agency === 'string') {
      const bankAccount: BankAccount = {
        accountNumber: this.accountForm.value.account,
        agency: this.accountForm.value.agency,
        code: this.bank.code
      }

      this.bankAccountService.saveBankAccount(bankAccount);
      this.routingNavigationService.navigateToRoute(RoutesEnum.Home);
    }
  }

  onSubmit(): void {
    this.createAccount();
  }

  clearFilter() {
    this.accountForm.reset();
  }
}
