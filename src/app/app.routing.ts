import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessTokenGuard } from './guard/access.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                canActivate: [AccessTokenGuard],
                component: DashboardComponent
            }

        ], { initialNavigation: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
