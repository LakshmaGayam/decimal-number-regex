import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  test: any;
  pattern:RegExp = /^\d+([.]\d{1,8})?$/;

  change() {
//  const t = this.test.match(^\d+([.]\d{1,8})?$)
  const regex = new RegExp(this.pattern);
  console.log(regex)
      const valid = regex.test(this.test);
      console.log(valid)
  }

}
