import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
       us : any;
  constructor() { }


    isAuthenticated(){
        this.us=localStorage.getItem('us');
        if (this.us!=null) return true;

        return false;
    }
}
