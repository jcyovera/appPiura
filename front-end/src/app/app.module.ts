import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ApiService, EmitterService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/* Prime NG */
import { CalendarModule } from 'primeng/primeng';

/*Components  */
import { HomeComponent } from './home/home.component';
import { PeopleListComponent} from "./people-list/people-list.component";
import { PeopleRegisterComponent} from "./people-register/people-register.component";
import { RefugeeRegisterComponent} from "./refugee-register/refugee-register.component";
import{ LoginComponent} from './login/login.component';

/* Directives and Pipes */
import { HighlightDirective} from './_directives/highlight';
import { MyCurrencyPipe } from './shared/my-currency.pipe';
import { MyCurrencyFormatterDirective } from './_directives/currency-formatter';

import { CanActivateAuthGuard } from './shared/can-active.service';
import { UserProfileService} from './login/user-profile.service';
import { RouteComponent } from './shared/route.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    CalendarModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleListComponent,
    PeopleRegisterComponent,
    RefugeeRegisterComponent,
    HighlightDirective,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective,
    LoginComponent,
    RouteComponent
  ],
  providers: [
    ApiService,
    EmitterService,
    CanActivateAuthGuard,
    UserProfileService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
