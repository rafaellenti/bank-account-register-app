import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
