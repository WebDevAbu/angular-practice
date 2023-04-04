import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() randomData: Number = 0;
  @Input() random: Number = 0;

  @Output() update = new EventEmitter<string>();
}
