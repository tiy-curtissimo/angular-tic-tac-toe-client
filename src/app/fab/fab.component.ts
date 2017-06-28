import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  @Input()
  mini: Boolean;

  @Input()
  position: String = 'right bottom';

  @Input()
  overlap: String;

  @Input()
  hide: boolean;

  constructor() { }

  ngOnInit() {
  }

  get classMap() {
    let left = false,
        top = false,
        right = true,
        bottom = true,
        sides = this.position.split(' ');
    if (sides.find(s => s === 'left')) {
      left = true;
      right = false;
    }
    if (sides.find(s => s === 'top')) {
      top = true;
      bottom = false;
    }
    return {
      fab: true,
      mini: this.mini,
      [`${this.overlap}-overlap`]: this.overlap,
      hide: this.hide,
      top,
      left,
      bottom,
      right
    }
  }

}
