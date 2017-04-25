import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class StarWarsService {
    constructor(private http: Http) { }

    starwarDetail(selectedCharacter: string) {
        return this.http.get('/api/character_detail/' + selectedCharacter)
        	.map(response => response.json());
    }
}

