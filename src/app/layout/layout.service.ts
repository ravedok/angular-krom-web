import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

export interface CategoryMenu {
  name: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private categoriesSubject: Subject<CategoryMenu[]> = new Subject<
    CategoryMenu[]
  >();
  private _categories$: Observable<CategoryMenu[]>;

  constructor(private http: HttpClient) {}

  get categories$(): Observable<CategoryMenu[]> {
    if (!this._categories$) {
      this._categories$ = this.categoriesSubject.asObservable();
      this.loadCategories();
    }

    return this._categories$;
  }

  loadCategories() {
    this.http
      .get('/categories/public')
      .pipe(
        map((response: any) =>
          response.data
            .filter(item => item.active === true)
            .map(item => ({
              name: item.name,
              slug: item.slug
            }))
        )
      )
      .subscribe(categories => {
        this.categoriesSubject.next(categories);
      });
  }
}
