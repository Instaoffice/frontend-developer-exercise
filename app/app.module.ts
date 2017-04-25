import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
    
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing,appRoutingProviders }        from './app.routing';
import { AuthGuard } from './_guards/index';
import { AuthenticationService,StarWarsService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import {HomeDetailComponent} from './home-detail/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HomeDetailComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        StarWarsService,
        appRoutingProviders,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }