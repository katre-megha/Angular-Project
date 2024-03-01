// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Your App Title'; // Add this line

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Handle start of navigation
        console.log('Navigation started');
      } else if (event instanceof NavigationEnd) {
        // Handle end of navigation
        console.log('Navigation ended');
      }
    });
  }
}
