import { Component } from '@angular/core';
import { ChildService } from './child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hierarchy';

  constructor(private child: ChildService){

  }
}
