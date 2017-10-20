import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { JobService } from './services/job.service'
import { JobComponent } from './job/job.component';
import { CentersService } from './services/centers.service';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { InvitationService } from './services/invitation.service';
import { DeleteInvitationComponent } from './delete-invitation/delete-invitation.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsService } from './services/alerts.service';
import { NewAlertComponent } from './new-alert/new-alert.component';
import { SingleAlertComponent } from './single-alert/single-alert.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { MapinfoComponent } from './mapinfo/mapinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    DashboardComponent,
    JobComponent,
    InvitationComponent,
    InvitationListComponent,
    DeleteInvitationComponent,
    JobDetailsComponent,
    AlertsComponent,
    NewAlertComponent,
    SingleAlertComponent,
    UsersListComponent,
    MapComponent,
    MapinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAEPLF39G3_N8Fdw7J8Q1gLsGWJWk9Wv_E"
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, DashboardService, CentersService, JobService, InvitationService, AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
