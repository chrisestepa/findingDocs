import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import {SignupformComponent} from './signupform/signupform.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JobComponent} from './job/job.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserprofileComponent },
    { path: 'login', component: LoginformComponent  },
    { path: 'signup', component: SignupformComponent  },
    { path: 'dashboard', component: DashboardComponent  },
    { path: 'job', component: JobComponent  },

    { path: '**', redirectTo: 'home' }
];
