import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerPhotoComponent } from './pages/container-photo/container-photo.component';
import { PhotoIdComponent } from './pages/photo-id/photo-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';
import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';
import { UserResolver } from './services/data.resolver';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    ContainerPhotoComponent,
    PhotoIdComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
