import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CommunityHubComponent} from './community-hub/community-hub.component';
import {EventDetailsComponent} from './event-details/event-details.component';

import {AppRoutingModule} from './app-routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateCommunityComponent} from './create-community/create-community.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatFormFieldModule
} from '@angular/material';
import {CommunityAPIService} from './community-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CommunityHubComponent,
    EventDetailsComponent,
    CreateCommunityComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [CommunityAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
