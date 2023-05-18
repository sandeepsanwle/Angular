import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { AboutcompanyComponent } from './about/aboutcompany/aboutcompany.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginGuardGuard } from './login-guard.guard';
import { NewComponent } from './new/new.component';
import { ObservableComponent } from './observable/observable.component';
 

const routes: Routes = [
     {path:'new',component:NewComponent},
    {path:'observable',component:ObservableComponent},
    { path: 'about', component: AboutComponent ,
      children:[
        {path:'aboutme',component:AboutmeComponent},
        {path:'aboutcompany',component:AboutcompanyComponent}
      ]},
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent},
    { path: '', component:FormComponent},
    {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }