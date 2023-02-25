import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Credentials } from './models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

creds:Credentials={
  email:'', password:''
};

constructor(private apiService: AuthenticationService, private route: Router){

}


login(form:NgForm){
this.apiService.login(this.creds).subscribe(response=>{

  this.route.navigate(['']);
})


}

}
