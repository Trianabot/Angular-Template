import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { DashboardComponent } from './components/dashboard.component';
import { PagesComponent } from '../../../pages/pages.component';

export const routes: Routes = [
    // .. here goes our components routes

    {
        path: '',
        component: PagesComponent,
        
        children: [{
            path: 'my',
            component: DashboardComponent,
        }]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {
}