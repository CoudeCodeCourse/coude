import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'coude-app';
  static path: any;
  // static path1: any;
  apppath = AppComponent.path;
  get IsLanding(): boolean {
    console.log(AppComponent.path);
    if (this.apppath === LandingComponent) {
      return true;
    }
    else
      return false;
  }
}
