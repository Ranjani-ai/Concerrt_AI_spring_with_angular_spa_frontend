import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-user-details', component: UserDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
