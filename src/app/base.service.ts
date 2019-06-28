import { Injectable, Injector } from '@angular/core';

@Injectable()
export abstract class BaseService {

  constructor(private injector: Injector) {
    console.log(this.injector);
  }
}
