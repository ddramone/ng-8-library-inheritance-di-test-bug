import { Injectable, Injector } from '@angular/core';


@Injectable()
export class BaseService {
  constructor(public injector: Injector) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyLibService extends BaseService {

  public foo = 'bar';

}
