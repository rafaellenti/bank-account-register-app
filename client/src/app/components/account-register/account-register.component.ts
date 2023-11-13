import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksListComponent } from '../banks-list/banks-list.component';

@Component({
  selector: 'app-account-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-register.component.html',
  styleUrl: './account-register.component.scss'
})

export class AccountRegisterComponent implements OnInit {
  public banksListComponent = BanksListComponent;

  ngOnInit(): void {

  }
}
