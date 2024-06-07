import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { RegisterComponent } from './register/register.component';

import { AccountComponent } from './account/account.component'
import { ReactiveFormsModule } from '@angular/forms'

import { AvatarComponent } from './avatar/avatar.component';


import { AppRoutingModule } from './app-routing.module'
import { RouterModule, Routes } from '@angular/router';
import { ServiceAuthComponent } from './service-auth/service-auth.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ProfileComponent } from './profile/profile.component';
/* import { SessionGuard } from './guards/session.guard'; */


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'account', component: AccountComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
]
@NgModule({
  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent, RegisterComponent, ServiceAuthComponent, UserDataComponent, ProfileComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}