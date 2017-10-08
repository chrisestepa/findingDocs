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
    DeleteInvitationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, DashboardService, CentersService, JobService, InvitationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
