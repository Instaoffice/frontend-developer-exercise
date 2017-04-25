import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 
@Component({
	moduleId: module.id,
    templateUrl: 'home-detail.component.html',
    styleUrls: ['./home-detail.component.css']

})

export class HomeDetailComponent {
  private character:any;
  private sub:any;
  public fullPath:string;

  constructor(private route: ActivatedRoute) {}

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.character = JSON.parse(params['character']); 
      this.fullPath="././assets/images/starwars-"+this.character.image+".png";
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

