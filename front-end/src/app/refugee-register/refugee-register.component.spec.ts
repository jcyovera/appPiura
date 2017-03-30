import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { RefugeeRegisterComponent } from './refugee-register.component';
import { RefugeeRegisterService } from './shared/refugee-register.service';

describe('a refugee-register component', () => {
	let component: RefugeeRegisterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: RefugeeRegisterService, useClass: MockRefugeeRegisterService },
				RefugeeRegisterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RefugeeRegisterComponent], (RefugeeRegisterComponent) => {
		component = RefugeeRegisterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original refugee-register service
class MockRefugeeRegisterService extends RefugeeRegisterService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
