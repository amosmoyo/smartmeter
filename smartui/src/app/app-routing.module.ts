import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Material } from './components/material/material.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'users', loadChildren: () => import('./components/users/user.module').then((m) => m.UserModule)},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [ HomeComponent, PagenotfoundComponent ],
  imports: [RouterModule.forRoot(routes), Material ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
