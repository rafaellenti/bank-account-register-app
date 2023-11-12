import { Injectable } from "@angular/core";
import { Bank } from "../interfaces/bankInterface";
import { Router } from "@angular/router";
import { RoutesEnum } from "../enum/routesEnum";

@Injectable({
    providedIn: 'root'
})

export class RoutingNavigation {
    constructor(private router: Router) { }

    navigateToRoute(route: RoutesEnum, bank?: Bank): void {
        const url = bank ? [route, bank.code] : [route];
        this.router.navigate(url);
    }
}