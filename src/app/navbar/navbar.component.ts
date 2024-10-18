import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarVisible = false;
  activeSubNav: string | null = null; // To track which sub-nav is open

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  toggleSubNav(navItem: string) {
    if (this.activeSubNav === navItem) {
      this.activeSubNav = null; // Close if already open
    } else {
      this.activeSubNav = navItem; // Open the selected sub-nav
    }
  }
}



