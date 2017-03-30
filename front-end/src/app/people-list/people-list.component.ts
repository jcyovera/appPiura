import { Component, OnInit } from '@angular/core';

import { PeopleList, PeopleFilter } from './shared/people-list.model';
import { PeopleListService } from './shared/people-list.service';
import { EmitterService, EmmitterConstants } from '../shared/index';

@Component({
	selector: 'people-list',
	templateUrl: 'people-list.component.html',
	providers: [PeopleListService]
})

export class PeopleListComponent implements OnInit {
	peopleList: PeopleList[] = [];
	filters: PeopleFilter = {
		searchText: ''
	}
	searchObservable: any;
	constructor(private peopleListService: PeopleListService,
		private emitterService: EmitterService) { }

	ngOnInit() {
		this.UpdateList();
		this.searchObservable = this.emitterService.get(EmmitterConstants.SEARCHTEXT_CHANGE)
			.subscribe(SearchText => {
				if (this.filters.searchText === SearchText) return false;
				this.filters.searchText = SearchText;
				this.UpdateList();
			});

	}
	getFullName(person: PeopleList) {
		return person.name + " " + person.lastName;
	}
	UpdateList() {
		this.peopleListService.getList(this.filters).subscribe((res) => {
			this.peopleList = res;
		});
	}
}