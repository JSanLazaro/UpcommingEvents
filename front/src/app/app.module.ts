import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './User/login/login.component';
import { HomeComponent } from './Events/views/home/home.component';
import { EventlistComponent } from './Events/components/eventlist/eventlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'; 

import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './User/register/register.component';
import { VloginComponent } from './User/views/vlogin/vlogin.component';
import { VregisterComponent } from './User/views/vregister/vregister.component';
import { AdminlistComponent } from './Events/components/adminlist/adminlist.component';
import { VadminlistComponent } from './Events/views/vadminlist/vadminlist.component';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './Events/components/userlist/userlist.component';
import { VuserlistComponent } from './Events/views/vuserlist/vuserlist.component';
import { VcreateComponent } from './Events/views/vcreate/vcreate.component';
import { VupdateComponent } from './Events/views/vupdate/vupdate.component';
import { UserdetailsComponent } from './Events/components/userdetails/userdetails.component';
import { VuserdetailsComponent } from './Events/views/vuserdetails/vuserdetails.component';
import { SliderComponent } from './Events/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EventlistComponent,
    RegisterComponent,
    VloginComponent,
    VregisterComponent,
    AdminlistComponent,
    VadminlistComponent,
    UserlistComponent,
    VuserlistComponent,
    VcreateComponent,
    VupdateComponent,
    UserdetailsComponent,
    VuserdetailsComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
