import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPhotoComponent } from './pages/container-photo/container-photo.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotoIdComponent } from './pages/photo-id/photo-id.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { UserResolver } from './services/data.resolver';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  }, //* una ruta estatica
  { 
    path: 'user/:id', 
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  },
  { 
    path: 'users', 
    component: UsersComponent
  },//* una ruta estatica
  { 
    path: 'photo', 
    component: ContainerPhotoComponent
  }, //* una ruta estatica
  { 
    path: 'photo/:id', 
    component: PhotoIdComponent
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: '**',
     component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
