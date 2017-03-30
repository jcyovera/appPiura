import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RefugeeRegister } from './refugee-register.model';

@Injectable()
export class RefugeeRegisterService {

	constructor(private http: Http) { }

	getList(): Observable<RefugeeRegister[]> {
		return this.http.get('/api/list').map(res => res.json() as RefugeeRegister[]);
	}
}