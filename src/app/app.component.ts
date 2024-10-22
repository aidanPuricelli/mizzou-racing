import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'racing-site';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll restoration logic can go here if needed
      }
    });
  }

  onActivate(event: any) {
    // Scroll to top when a new component is activated
    window.scrollTo(0, 0);
  }
}
