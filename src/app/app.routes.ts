import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';

const APP_ROUTES:Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:NotFountComponent}
]

export const routes = RouterModule.forRoot(APP_ROUTES);