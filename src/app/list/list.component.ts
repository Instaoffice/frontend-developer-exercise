import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {data} from '../mock_data/mock_data';

@Component({
  selector: 'charecters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {
    this.listing = data;
  }

  listing = {};
  id = null;

  ngOnInit(): void {
  }

  detail(id) {
    this.id = id;
  }

  next() {
    console.log("id", this.id);
    this.router.navigate(['detail/' + this.id])
  }
}
