import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialNetworks: any;
  constructor(private config: ConfigService) {
    this.socialNetworks = config.socialNetworks;
  }

  ngOnInit() {}
}
