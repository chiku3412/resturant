import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isSidebar: boolean = false;

    constructor() { }
    toggleMenu() {
        this.isSidebar = !this.isSidebar;

        if (this.isSidebar) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }
}
