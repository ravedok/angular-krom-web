import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HomeSlider } from './../home.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slider: HomeSlider;
  @Input() index: number;

  @HostBinding('class') get className(): string {
    return ['first', 'second', 'third'][this.index];
  }

  @HostBinding('style') get backgroundImage(): any {
    const { slider } = this;
    return this.sanitizer.bypassSecurityTrustStyle(`
      background-image: url(${slider.backgroundImage});
      background-position-x: ${slider.backgroundHorizontalPosition};
      background-position-y: ${slider.backgroundVerticalPosition};
    };
    `);
  }
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
