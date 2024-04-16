import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, RouterModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
@UntilDestroy()
export class SidebarComponent implements OnInit {
  @Input() 
  expanded: boolean = false;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }


  constructor() {
    
  }

  ngOnInit(): void {
  }
}
