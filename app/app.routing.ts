import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
//import { NotFoundComponent } from './Components/not-found.component';


const appRoutes: Routes = [
    //{ path: '', component: NotFoundComponent, pathMatch: 'full' },
    //{ path: 'not-found', component: NotFoundComponent },

];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
