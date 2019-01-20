import { Component, OnInit } from '@angular/core';
import { LayoutService, CategoryMenu } from './../../layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent implements OnInit {
  categories$: Observable<CategoryMenu[]>;

  constructor(private service: LayoutService) {
    this.categories$ = this.service.categories$;
  }

  ngOnInit() {}
}
