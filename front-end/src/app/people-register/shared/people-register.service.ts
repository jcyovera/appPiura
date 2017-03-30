import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PeopleRegister } from './people-register.model';

@Injectable()
export class PeopleRegisterService {

	constructor(private http: Http) { }

	getList(): Observable<PeopleRegister[]> {
		return this.http.get('/api/list').map(res => res.json() as PeopleRegister[]);
	}
}