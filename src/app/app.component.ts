import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api";
import {
  NbLayoutModule, NbSidebarModule, NbSidebarService
} from '@nebular/theme';
import { NavbarLeftComponent } from './@theme/components/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from './@theme/components/navigation/navigation/navigation.component';
import { SvgIconComponent } from './@theme/components/svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './@theme/components/svg-definitions/svg-definitions.component';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NbLayoutModule, NbSidebarModule, NavigationComponent, SvgIconComponent, SvgDefinitionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NbSidebarService]
})
export class AppComponent implements OnInit {
  title = 'test-app';

  expanded: boolean = true;


  // greet(event: SubmitEvent, name: string): void {
  //   event.preventDefault();

  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   invoke<string>("greet", { name }).then((text) => {
  //     this.greetingMessage = text;
  //   });
  // }


  constructor() {
    // enable decorators, tauri window
    // window.__TAURI__.invoke('tauri', { cmd: 'enableDecorators' });
  }
  ngOnInit(): void {
    this.handleResize();
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      console.log(e);
      this.expanded = e.matches;
    });
  }



  manualToggle() {
    this.expanded = !this.expanded;
  }
}
