import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() type!: String
  @Input() className!: String
  @Input() id!: String
  @Input() image!: String
  @Input() for!: String
  @Input() label!: String
}
