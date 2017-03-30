import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { PeopleRegisterComponent } from './people-register.component';
import { PeopleRegisterService } from './shared/people-register.service';

describe('a people-register component', () => {
	let component: PeopleRegisterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: PeopleRegisterService, useClass: MockPeopleRegisterService },
				PeopleRegisterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PeopleRegisterComponent], (PeopleRegisterComponent) => {
		component = PeopleRegisterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original people-register service
class MockPeopleRegisterService extends PeopleRegisterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
