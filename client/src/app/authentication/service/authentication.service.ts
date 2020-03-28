import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	private headers;
	private url: string;

  constructor(	private _http: HttpClient	) { 
  	this.headers = new HttpHeaders().set("Content-Type", "json/application");
  	this.url = 'http://localhost:3700/api/user';
  }

  	//Method to test the service and the server
  	public test():Observable<any>{
  		return this._http.get(this.url + '/test', {headers: this.headers});
  	}

}