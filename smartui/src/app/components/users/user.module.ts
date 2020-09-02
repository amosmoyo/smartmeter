import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material } from '../material/material.module';
import { MatchValueDirective } from './match-value.directive';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { UserData } from './user.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, resolve: { user: UserData}, canActivate: [AuthGuardGuard]}
];

@NgModule({
  declarations: [LoginComponent, SignupComponent, DashboardComponent, MatchValueDirective],
  imports: [ CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), FormsModule, Material],
  exports: [RouterModule]
})
export class UserModule {}
