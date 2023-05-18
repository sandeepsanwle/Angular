import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { AboutcompanyComponent } from './about/aboutcompany/aboutcompany.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { SubusersComponent } from './users/subusers/subusers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservableComponent } from './observable/observable.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AboutComponent,
    ContactComponent,
    AboutmeComponent,
    AboutcompanyComponent,
    UsersComponent,
    SubusersComponent,
    PageNotFoundComponent,
    ObservableComponent,
    NewComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[FormComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
