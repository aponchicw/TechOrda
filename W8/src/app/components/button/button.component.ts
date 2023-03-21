import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className!: String;
  @Input() id!: String;
  @Input() value!: String;
}
