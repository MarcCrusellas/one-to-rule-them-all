import { Component } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window'
@Component({
  selector: 'app-window-management',
  standalone: true,
  imports: [],
  templateUrl: './window-management.component.html',
  styleUrl: './window-management.component.scss'
})
export class WindowManagementComponent {
  get isMaximized() {
    return appWindow.isMaximized()
  }
  get getTauriWindow() {
    return window.__TAURI__
  }
  minimize() {
    
    appWindow.minimize()
  }
  maximize() {
    if (!this.isMaximized) {
      appWindow.maximize()
    } else {
      appWindow.unmaximize()
    }

  }
  close() {
    appWindow.close()
  }



}
