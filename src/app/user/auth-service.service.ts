import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user$: Observable<User | null>; // $ sign to represent an observable


  constructor(private http:HttpClient,
              private router: Router,
              public afAuth: AngularFireAuth,
              public snackBar: MatSnackBar)
               {
                this.user$ = this.afAuth.authState; //authState returns an observable object or not(boolean)
               }

  logout(){
    this.afAuth.auth.signOut()    // this signOut returns a promise
  .then(()=>{
    this.snackBar.open(`You have Signed Out`, 'OK', {
      duration:5000
    });
    this.router.navigate(['/weather']);
  })
  }


  private handleErrors(res: HttpErrorResponse){
    console.log(res);
    return throwError(res.error || 'Server error')
  }
}
