import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { CORPORATE_THEME, COSMIC_THEME, DARK_THEME, DEFAULT_THEME, NbThemeModule } from "@nebular/theme";
import { APP_ROUTES } from "./app.routes";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES),
  importProvidersFrom(NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]))],

};
