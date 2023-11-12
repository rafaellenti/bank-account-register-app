import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BanksListComponent } from './components/banks-list/banks-list.component';
import { AccountRegisterComponent } from './components/account-register/account-register.component';

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
        path: 'account-register',
        component: AccountRegisterComponent,
        title: 'Register Account'
    }
];

export default routes;
