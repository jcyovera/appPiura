import { Component, OnInit } from '@angular/core';
/*import { PeopleRegister } from './shared/people-register.model';*/
/*import { PeopleList } from '../people-list/shared/people-list.model';*/
import { PeopleRegisterService } from './shared/people-register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'people-register',
	templateUrl: 'people-register.component.html',
	providers: [PeopleRegisterService]
})

export class PeopleRegisterComponent implements OnInit {
	personRegister: FormGroup;
	/*personRegister: PeopleList={
		id:null,
		name:"",
		lastName:"",
		dni:null,
		birthday:new Date(),
		refugeeId:null,
		familyMembers:0,
		tendNumber:0,
		created:new Date()
	};*/

	constructor(private fb: FormBuilder,private router: Router) { }

	ngOnInit() {
		this.personRegister=this.getPersonForm();
	}
	getPersonForm() {
        return this.fb.group({
            firstName: [null, Validators.required],
            lastName: [null],
            dni: [null],
            birthday: [null],
			refugeeId: [null],
			familyMembers: [null],
			tendNumber: [null]
        });
    }
	submitForm(form){
		console.log(form);
	}
}