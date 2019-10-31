import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { City } from './interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userCollection: AngularFirestoreCollection = this.afs.collection('users');
  cityCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  getUserCities(userId: string): Observable<any[]> {
    this.cityCollection = this.afs.collection(`users/${userId}/cities`, 
    (ref)=> ref.orderBy('time', 'desc'));

    return this.cityCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return { ...data };
      }))
    );
  }

  addCity(userId:string, weather: any){
    const city = {
      weather,
      time: new Date()
    };
    return this.userCollection.doc(userId).collection('cities').add(city);
  }

  getCity(userId: string, cityId: City){
    return this.afs.doc(`users/${userId}/cities/${cityId}`)
  }

  deleteCity(userId: string, city: City){
    return this.getCity(userId, city).delete();
  }

  updateCity(userId: string, city: City, weather){
    const newCity = {
      weather,
      time: new Date()
    };
    return this.getCity(userId,city).set(newCity);
  }

  private handleError(res: HttpErrorResponse){
    console.log(res);
    return throwError(res.error || 'Server Error')
  }
}
