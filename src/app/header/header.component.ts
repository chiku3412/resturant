import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isSidebar : boolean = false;

  constructor() {}
  toggleMenu() {
    this.isSidebar = !this.isSidebar;
  }
}
