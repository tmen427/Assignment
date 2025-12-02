import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../layout/side-bar-component/side-bar-component';
import { NavBarComponent } from '../layout/nav-bar-component/nav-bar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('assignment-app');
}
