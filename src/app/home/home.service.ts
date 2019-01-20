import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface HomeSlider {
  title: string;
  content: string;
  actions: {
    label: string;
    action: string;
  }[];
  backgroundImage: string;
  backgroundVerticalPosition: string;
  backgroundHorizontalPosition: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private slidersSubject: Subject<HomeSlider[]> = new Subject<HomeSlider[]>();
  private _sliders$: Observable<HomeSlider[]>;

  constructor(private http: HttpClient) {}

  get sliders$(): Observable<HomeSlider[]> {
    if (!this._sliders$) {
      this._sliders$ = this.slidersSubject.asObservable();
      this.loadSliders();
    }

    return this._sliders$;
  }

  loadSliders() {
    this.http
      .get('/home-slider')
      .pipe(
        map((response: any) =>
          response.data.slides
            .filter(item => item.active === true)
            // .sort((a, b) => b.position - a.position)
            .map(item => <HomeSlider>item)
            .slice(0, 3)
        )
      )
      .subscribe(sliders => {
        console.log(sliders);
        this.slidersSubject.next(sliders);
      });
  }
}
