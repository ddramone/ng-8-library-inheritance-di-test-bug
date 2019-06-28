import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor(ser: MyLibService) {
    console.log(ser);
  }

  ngOnInit() {
  }

}
