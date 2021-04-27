import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';

  //Here AHead-Of-Time Compilation refuses to connect non-public 
  //members with the HTML template that is why here '_authService'
  //is made public
  constructor(public _authService:AuthService){}
}
