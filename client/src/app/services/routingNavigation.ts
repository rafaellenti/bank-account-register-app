import { Injectable } from "@angular/core";
import { Bank } from "../interfaces/bankInterface";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class RoutingNavigation {
    constructor(private router: Router) { }

    navigateToAccountRegistration(bank?: Bank): void {

    }
}