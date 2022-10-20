import { Component } from '@angular/core';
import { Dwn } from '@tbd54566975/dwn-sdk-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dwn-ui';

  constructor() {
    console.log(Dwn);
  }
}
