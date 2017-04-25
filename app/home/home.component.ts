import { Component,OnInit} from '@angular/core';
import {StarWarsService} from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';


declare var jQuery:any;

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
     styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
 
  
  private character: string[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private starwarsService: StarWarsService
        ) { }

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    jQuery(':radio').click(function() {
        if (this.checked) {
            jQuery('img.activeCharacter').removeClass('activeCharacter').addClass('inactiveCharacter');
            jQuery(this).siblings('img').removeClass('inactiveCharacter').addClass('activeCharacter');
        }
    });

  }

  redirect() {
    var selectedCharacter = jQuery(':radio:checked').val();
    this.starwarsService.starwarDetail(selectedCharacter)
            .subscribe(
                data => {
                    this.router.navigate(['./home-detail',JSON.stringify(data) ]);
                },
                error => {

                });
  }
 
}