import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {data} from '../mock_data/mock_data'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  detail: {}
  id = null;
  image: String;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == this.id) {
        this.detail = data[i];
        this.image = data[i].image;
      }
    }
  }

  goBack() {
    this.router.navigate(['list']);
  }

}
