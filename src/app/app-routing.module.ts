import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LogoutComponent } from './logout/logout.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CardinalComponent } from './cardinal/cardinal.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'dashbord', component: DashBoardComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'cardinal', component: CardinalComponent},
  { path: 'passwordchange' , component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
