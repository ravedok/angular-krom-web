import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';

export interface CategoryMenu {
  name: string;
  slug: string;
}

const CATEGORIES_MENU_KEY = makeStateKey('categories_menu');

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private categoriesSubject: Subject<CategoryMenu[]> = new Subject<
    CategoryMenu[]
  >();
  private _categories$: Observable<CategoryMenu[]>;

  constructor(private http: HttpClient, private state: TransferState) {}

  get categories$(): Observable<CategoryMenu[]> {
    if (!this._categories$) {
      this._categories$ = this.categoriesSubject.asObservable();
      this.loadCategories();
    }

    return this._categories$;
  }

  loadCategories() {
    const state = this.state.get<CategoryMenu[]>(CATEGORIES_MENU_KEY, null);

    if (state) {
      setTimeout(() => this.categoriesSubject.next(state));
    } else {
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
          this.state.set<CategoryMenu[]>(CATEGORIES_MENU_KEY, categories);
          this.categoriesSubject.next(categories);
        });
    }
  }
}
