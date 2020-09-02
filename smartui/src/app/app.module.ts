import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Material } from './components/material/material.module';
import { HttpErrorsComponent } from './components/http-errors/http-errors.component';
import { ErrorInterCeptor } from './auth.interceptor';
import { UserInterceptor } from './user.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HttpErrorsComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Material
  ],
  entryComponents: [HttpErrorsComponent, DialogComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterCeptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
