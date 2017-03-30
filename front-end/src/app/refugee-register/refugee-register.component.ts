import { Component, OnInit } from '@angular/core';


import { RefugeeRegisterService } from './shared/refugee-register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'refugee-register',
	templateUrl: 'refugee-register.component.html',
	providers: [RefugeeRegisterService]
})

export class RefugeeRegisterComponent implements OnInit {
	refugeeRegister: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.refugeeRegister=this.getRefugeeForm();
	}
	getRefugeeForm(){
		return this.fb.group({
            name: [null, Validators.required],
            address: [null],
            locationId: [null]
        });
	}
	submitForm(form){
		console.log(form);
	}
}