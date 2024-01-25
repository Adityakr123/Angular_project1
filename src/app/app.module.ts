import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentModifiedComponent } from './ng-content-modified/ng-content-modified.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { ComponentHttpServicesComponent } from './component-http-services/component-http-services.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GithubProfileComponentComponent } from './github-profile-component/github-profile-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component'
import { RouterModule } from '@angular/router';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { PostsComponent } from './posts/posts.component';
import { NewsComponent } from './news/news.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { ChildComponent } from './child/child.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { TeslaNewsComponent } from './tesla-news/tesla-news.component';
import { AppleNewsComponent } from './apple-news/apple-news.component';
import { TechCrunchNewsComponent } from './tech-crunch-news/tech-crunch-news.component';
import { WallstreetNewsComponent } from './wallstreet-news/wallstreet-news.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Formexample1Component } from './formexample1/formexample1.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdityaComponent } from './aditya/aditya.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NgContentComponent,
    NgContentModifiedComponent,
    ContactFormComponent,
    ComponentHttpServicesComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    GithubProfileComponentComponent,
    NotFoundComponentComponent,
    GithubFollowerComponent,
    PostsComponent,
    NewsComponent,
    
    TopheadingComponent,
         ChildComponent,
         BuisnessNewsComponent,
         TeslaNewsComponent,
         AppleNewsComponent,
         TechCrunchNewsComponent,
         WallstreetNewsComponent,
         AllnewsComponent,
         ReactiveformComponent,
         Formexample1Component,
         SignupComponent,
         LoginComponent,
         AdityaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponentComponent},
      {path:'News',component:TopheadingComponent,
      children:[{path:'tesla',component:TeslaNewsComponent},{path:'allnews',component:AllnewsComponent},{path:'apple',component:AppleNewsComponent}]},
      {path:'News/CHILD',component:ChildComponent},
      {path:'followers/:username',component:GithubProfileComponentComponent},
      {path:'reactive',component:ReactiveformComponent},
      {path:'form1',component:Formexample1Component},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'**',component:NotFoundComponentComponent},
    ]),
    NgbModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
