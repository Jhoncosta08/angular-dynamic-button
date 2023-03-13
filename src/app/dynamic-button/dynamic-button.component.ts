import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.css']
})
export class DynamicButtonComponent {
  @Input() buttonText: string = 'BUTTON';
  @Input() buttonType: 'primary' | 'danger' | 'warn' = 'primary';
  @Input() buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();
}
