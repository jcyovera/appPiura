import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PeopleList ,PeopleFilter} from './people-list.model';

@Injectable()
export class PeopleListService {

	constructor(private http: Http) { }

	getList(filters: PeopleFilter): Observable<PeopleList[]> {
		let params = new URLSearchParams();
		params.set('q',String(filters.searchText));

		return this.http.get('http://localhost:3000/person',{search:params}).map(res => res.json() as PeopleList[]);
	}
}