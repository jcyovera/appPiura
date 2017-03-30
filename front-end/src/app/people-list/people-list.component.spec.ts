import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PeopleListComponent } from './people-list.component';
import { PeopleListService } from './shared/people-list.service';

describe('a people-list component', () => {
	let component: PeopleListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: PeopleListService, useClass: MockPeopleListService },
				PeopleListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PeopleListComponent], (PeopleListComponent) => {
		component = PeopleListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original people-list service
class MockPeopleListService extends PeopleListService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
