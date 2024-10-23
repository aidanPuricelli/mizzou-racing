import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParallaxMousemove]'
})
export class ParallaxMousemoveDirective {

  constructor(private el: ElementRef) {}

  // Listen to mousemove events on the document
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const heroContainer = this.el.nativeElement as HTMLElement;

    // Horizontal movement: limited to a small range (45% - 55%)
    const moveX = 45 + (event.clientX / window.innerWidth) * 2;
    
    // Vertical movement: limited to a smaller range (55% - 65%)
    const moveY = 55 + (event.clientY / window.innerHeight) * 2;
    
    // Update the background position dynamically
    heroContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
  }
}
