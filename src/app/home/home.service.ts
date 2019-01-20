import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';

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

const HOME_SLIDERS_KEY = makeStateKey('home_sliders');

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private slidersSubject: Subject<HomeSlider[]> = new Subject<HomeSlider[]>();
  private _sliders$: Observable<HomeSlider[]>;

  constructor(private http: HttpClient, private state: TransferState) {}

  get sliders$(): Observable<HomeSlider[]> {
    if (!this._sliders$) {
      this._sliders$ = this.slidersSubject.asObservable();
      this.loadSliders();
    }

    return this._sliders$;
  }

  loadSliders() {
    const state = this.state.get<HomeSlider[]>(HOME_SLIDERS_KEY, null);

    if (state) {
      setTimeout(() => {
        this.slidersSubject.next(state);
      });
    } else {
      this.http
        .get('/home-slider')
        .pipe(
          map((response: any) =>
            response.data.slides
              .filter(item => item.active === true)
              .map(item => <HomeSlider>item)
              .slice(0, 3)
          )
        )
        .subscribe(sliders => {
          this.state.set<HomeSlider[]>(HOME_SLIDERS_KEY, sliders);
          this.slidersSubject.next(sliders);
        });
    }
  }
}
