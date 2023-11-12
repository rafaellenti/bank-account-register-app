import { Routes } from '@angular/router';
<<<<<<< Updated upstream

export const routes: Routes = [];
=======
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
        path: 'register-account/:id',
        component: AccountRegisterComponent,
        title: 'Register Account'
    }
];

export default routes;
>>>>>>> Stashed changes
