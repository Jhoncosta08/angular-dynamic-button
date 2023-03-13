import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonAction(buttonType: string): void {
    switch (buttonType.trim().toLowerCase()) {
      case 'primary':
        console.log('primary button clicked!');
        break;
      case 'danger':
        console.log('danger button clicked!');
        break;
      case 'warn':
        console.log('warn button clicked!');
        break;
    }
  }

}
