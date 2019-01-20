import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlobe,
  faCaretDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {
    library.add(faGlobe, faCaretDown, faSearch);
  }

  ngOnInit() {}
}
