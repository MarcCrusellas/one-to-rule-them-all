import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/tauri";
import {
  NbLayoutModule
} from '@nebular/theme';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NbLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';


  // greet(event: SubmitEvent, name: string): void {
  //   event.preventDefault();

  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   invoke<string>("greet", { name }).then((text) => {
  //     this.greetingMessage = text;
  //   });
  // }
}
