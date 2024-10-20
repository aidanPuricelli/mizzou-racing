import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const heroContainer = document.querySelector('.hero-container') as HTMLElement;

    // Horizontal movement: limited to a small range (45% - 55%)
    const moveX = 45 + (event.clientX / window.innerWidth) * 2;
    
    // Vertical movement: limited to a smaller range (55% - 65%)
    const moveY = 55 + (event.clientY / window.innerHeight) * 2;
    
    // Update the background position dynamically
    heroContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
  }
}
