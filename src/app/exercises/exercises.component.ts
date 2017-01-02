import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { NavItems } from '../shared/side-nav/side-nav.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  title: string = 'Exercises';

  navItems: NavItems = {
    items: []
  };

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.firebase.list('exerciseDefaults').subscribe(value => {
      this.navItems.items = [];
      console.log(value);
      value.forEach(element => {
        this.navItems.items.push({name: element.name, route: element.$key});
      });
    })
  }

}
