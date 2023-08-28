import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './Events/views/home/home.component';
// import { LoginComponent } from './User/login/login.component';
import { EventlistComponent } from './Events/components/eventlist/eventlist.component';
import { VloginComponent } from './User/views/vlogin/vlogin.component';
import { VregisterComponent } from './User/views/vregister/vregister.component';
import { VadminlistComponent } from './Events/views/vadminlist/vadminlist.component';
import { VuserlistComponent } from './Events/views/vuserlist/vuserlist.component';
import { VuserdetailsComponent } from './Events/views/vuserdetails/vuserdetails.component';
import { HomeComponent } from './Events/views/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'events', component:EventlistComponent},
  {path:'login', component:VloginComponent},
  {path:'register', component:VregisterComponent},
  {path:'admin/events', component:VadminlistComponent},
  // {path:'admin/events/create', component:vadmincreateComponent},
  // {path:'admin/events/update/:id', component:vadminupdateComponent},
  {path:'user/:user_id/events', component:VuserlistComponent},
  {path:'user/:user_id/details/:event_id', component:VuserdetailsComponent},  
  {path:'zz', component:EventlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
