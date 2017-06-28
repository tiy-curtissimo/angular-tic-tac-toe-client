import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent {

  @Input()
  nearFab: Boolean;

}
