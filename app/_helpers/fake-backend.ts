import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // array in local storage for registered users
    // let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
                let valid = 'yoda' === params.username && 'dogbah' === params.password;

                if (valid) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    // let user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            id: 1,
                            username: params.username,
                            /*firstName: user.firstName,
                            lastName: user.lastName,*/
                            token: 'fake-jwt-token'
                        }
                    })));
                } else {
                    let validUser = params.username === 'yoda';
                    let validPwd  = params.password === 'dogbah';

                    let err = new Error();
                    if (!validUser) {
                        err.name = 'username';
                        err.message = 'Username is not valid.'
                    } else if (!validPwd) {
                        err.name = 'password';
                        err.message = 'Password didn\'t match.';
                    }

                    // else return 400 bad request
                    connection.mockError(err);
                }

                return;
            }

            if (connection.request.url.indexOf('/api/character_detail/') !== -1 
                && connection.request.method === RequestMethod.Get) {
                
                let selectedCharacter = connection.request.url.split('/').pop();
                connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        //jedi.json can also be used (fake-details.json)
                        body: {
                            "name" : selectedCharacter,
                            "image" : selectedCharacter,
                            "about" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi accusantium ab sunt, laborum eum quos laudantium nulla voluptatibus sed, tempora voluptate veritatis molestias odit possimus quibusdam assumenda, asperiores magnam harum?"
                        }
                    })));

                return;
            }

            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
};

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};