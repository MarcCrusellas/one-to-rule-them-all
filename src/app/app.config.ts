import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { NbThemeModule } from "@nebular/theme";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES),
  importProvidersFrom(NbThemeModule.forRoot({
    name: 'default',
  }))],

};
