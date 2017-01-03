import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  navItems = [
    { name: 'Workout Types', route: 'workout-type' },
    { name: 'Exercises', route: 'exercises' }
  ]
}
