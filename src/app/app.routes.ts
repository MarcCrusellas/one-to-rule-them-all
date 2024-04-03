import { Routes } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { SkeletonComponent } from "./@theme/layout/skeleton/skeleton.component";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '', component: SkeletonComponent,
        children: [
            // {
            //     path: 'home',
            //     loadChildren: () =>
            //         import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
            // },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];
