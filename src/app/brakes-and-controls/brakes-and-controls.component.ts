import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-brakes-and-controls',
  templateUrl: './brakes-and-controls.component.html',
  styleUrl: './brakes-and-controls.component.css'
})
export class BrakesAndControlsComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const heroContainer = document.querySelector('.aero-banner') as HTMLElement;

    // Horizontal movement: limited to a small range (45% - 55%)
    const moveX = 45 + (event.clientX / window.innerWidth) * 2;
    
    // Vertical movement: limited to a smaller range (55% - 65%)
    const moveY = 55 + (event.clientY / window.innerHeight) * 2;
    
    // Update the background position dynamically
    heroContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
  }

}
