import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';

const routes: Routes = [
{path: '', component: LoginComponent},
{path:'register-component',component:RegisterComponent,canActivate:[RoleGuard]},
{path:'about-component',component:AboutComponent,canActivate:[RoleGuard]},
{path:'home-component',component:HomeComponent,canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
