import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user= {name: 'aljanue', password: '1234'};
  private logged= new Subject<boolean>();
  private route="/home";

  getUser(){
    return this.user;
  }

  setLogged(x:boolean){
    this.logged.next(x); // Emitir un nuevo valor
  }

  getLogged(){
    return this.logged.asObservable(); // Devolver un Observable
  }

  setRoute(x:string){
    this.route = x;
  }

  getRoute(){
    return this.route;
  }
}