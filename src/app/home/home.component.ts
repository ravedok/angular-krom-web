import { Component, OnInit } from '@angular/core';
import { HomeService, HomeSlider } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliders$: Observable<HomeSlider[]>;

  constructor(private service: HomeService) {
    this.sliders$ = this.service.sliders$;
    console.log(this.sliders$);
  }

  ngOnInit() {}
}
