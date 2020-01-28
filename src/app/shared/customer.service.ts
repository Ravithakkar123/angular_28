import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
      readonly url: string = "https://localhost:44330/api";
      constructor(private http : HttpClient){}
       formData : Customer;

   GetCustomer() : Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url + '/customer')
    .pipe(
      tap(data => console.log('GetCustomer: '+ JSON.stringify(data)))
    );
  }
    
 postCustomer(formData : Customer)  : any
    { 

       console.log(formData);
       this.http.post(this.url+ 'customer' ,formData , {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        })
});
   }
   DeleteCustomer(id) : Observable<{}>
   {
   
    
     return this.http.delete(this.url +"/customer/"+ id  ).pipe(
      tap(id => console.log('GetCustomer: '+ JSON.stringify(id))));
   }
  

}