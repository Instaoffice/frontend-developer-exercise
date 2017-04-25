import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { HomeDetailComponent} from './home-detail/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home-detail/:character', component: HomeDetailComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];
export const routing = RouterModule.forRoot(appRoutes);