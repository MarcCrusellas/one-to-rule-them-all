import { Component } from '@angular/core';
import { WindowManagementComponent } from '../../@theme/layout/window-management/window-management.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WindowManagementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
