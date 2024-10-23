import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-line',
  templateUrl: './scroll-line.component.html',
  styleUrls: ['./scroll-line.component.css']
})
export class ScrollLineComponent {
  lineWidth = 0; // Initial width is 0%

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    // Update the line width based on how much the page has been scrolled
    this.lineWidth = scrolled;
  }
}
