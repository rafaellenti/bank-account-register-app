import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
<<<<<<< Updated upstream

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
import { provideRouter } from '@angular/router';
import routeConfig from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
>>>>>>> Stashed changes
