import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResizerComponent } from '../resizer/resizer.component';
import { NavbarLeftComponent } from '../navbar-left/navbar-left.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  
  standalone: true,
  imports: [ResizerComponent, NavbarLeftComponent, SidebarComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() expanded: boolean = false;
  @Output() manualToggle = new EventEmitter();
  constructor() {}

  toggle() {
    this.manualToggle.emit();
  }
}
