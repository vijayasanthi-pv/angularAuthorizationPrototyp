import { BrowserModule } from '@angular/platform-browser'; //Required for the app to run on browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Required for 2-way binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';//Required for invoking backend services via http
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, EventService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true //we can use multiple interceptors if required
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
