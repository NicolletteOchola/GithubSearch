import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcDatePipe } from './calc-date.pipe';
import { RepositoryComponent } from './repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user-service/user.service';
import { RepositoryService } from './repository-service/repository.service';


@NgModule({
  declarations: [
    AppComponent,
    CalcDatePipe,
    RepositoryComponent,
    SearchFormComponent,
    NavbarComponent,
    LandingComponent,
    CalcDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
