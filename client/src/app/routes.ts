import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import {SignupformComponent} from './signupform/signupform.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JobComponent} from './job/job.component';
import {InvitationComponent} from './invitation/invitation.component';
import {InvitationListComponent} from './invitation-list/invitation-list.component';
import {DeleteInvitationComponent} from './delete-invitation/delete-invitation.component';
import {JobDetailsComponent} from './job-details/job-details.component';
import {AlertsComponent} from './alerts/alerts.component';
import {NewAlertComponent} from './new-alert/new-alert.component';
import {UsersListComponent} from './users-list/users-list.component';
import {MapComponent} from './map/map.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserprofileComponent },
    { path: 'login', component: LoginformComponent  },
    { path: 'signup', component: SignupformComponent  },
    { path: 'dashboard', component: DashboardComponent  },
    { path: 'invitation', component: InvitationComponent },
    { path: 'invitations/:id/:user', component: DeleteInvitationComponent },
    { path: 'job', component: JobComponent  },
    { path: 'invitations', component: InvitationListComponent  },
    { path: 'dashboard/:id', component: JobDetailsComponent},
    { path: 'alerts', component: AlertsComponent},
    { path: 'newalert', component: NewAlertComponent},
    { path: 'userslist', component: UsersListComponent},
    { path: 'map', component: MapComponent},
    { path: '**', redirectTo: 'home' }
];
