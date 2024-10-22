import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrl: './meet-the-team.component.css'
})
export class MeetTheTeamComponent implements AfterViewInit{
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Select the About Us card using the class or id
    const teamImage = this.el.nativeElement.querySelector('.team-image');
    const teamText = this.el.nativeElement.querySelector('.team-text');
    const teamCards = this.el.nativeElement.querySelectorAll('.team-card');

    // Create the IntersectionObserver for "About Us"
    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation classes when the card is in view
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Create the IntersectionObserver for "Contact Us"
    const historyCarObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation classes for the contact card
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3 // Trigger when 10% of the card is visible
    });

    // Observe the About Us and Contact Us cards
    if (teamImage) {
      aboutObserver.observe(teamImage);
    }

    if (teamText) {
      historyCarObserver.observe(teamText);
    }

    teamCards.forEach((historyCar: Element) => {
      aboutObserver.observe(historyCar);
    });
  }
}
