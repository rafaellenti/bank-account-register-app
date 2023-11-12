import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BanksListComponent } from './banks-list/banks-list.component';
import { AccountRegisterComponent } from './account-register/account-register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'banks-list',
        component: BanksListComponent,
        title: 'Banks List'
    },
    {
        path: 'account-register/:id',
        component: AccountRegisterComponent,
        title: 'Register Account'
    }
];

export default routes;
