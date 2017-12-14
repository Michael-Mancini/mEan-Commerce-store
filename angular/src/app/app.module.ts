import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { DataService } from './services/data.service';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes:Routes = [
  {path:'', component:DashboardComponent},
  {path:'cart', component:CartComponent},
  {path:'add', component:AddNewComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddNewComponent,
    NavbarComponent,
    DashboardComponent,
    CartComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
