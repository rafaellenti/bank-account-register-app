import { Injectable } from "@angular/core";
import { Bank } from "../interfaces/bankInterface";
import { Router } from "@angular/router";
import { RoutesEnum } from "../enum/routesEnum";

@Injectable({
    providedIn: 'root'
})

export class RoutingNavigationService {
    constructor(private router: Router) { }

    navigateToRoute(route: RoutesEnum, bank?: Bank): void {
        if (bank) {
            this.router.navigate([route], {
                state: { bankData: bank }
            });
        }

        // const url = bank ? [route, bank.code] : [route];
        this.router.navigate([route]);
    }
}