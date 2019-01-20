import { Injectable } from '@angular/core';
import { config } from '../../config';

export class Config {
  apiUrl: string;
  socialNetworks: {
    [x: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends Config {
  constructor() {
    super();
    Object.assign(this, config);
  }
}
