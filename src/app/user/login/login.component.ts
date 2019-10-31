import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  providers = AuthProvider;

  constructor( private afAuth: AngularFireAuth,
               public snackBar: MatSnackBar,
               private router: Router) { }

  ngOnInit() {
  }

  successLogIn(){  // the whole user object is in content content: any
    this.snackBar.open(`You have Signed In`, 'OK', {
      duration:5000
    });
    this.router.navigate(['/weather']);
  }

}
