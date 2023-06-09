import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take, takeUntil } from 'rxjs';
import { Site } from './models/site';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor() { }

  public title = 'project';
  public mockSites = [
    new Site(1, 'foo', 'australia'),
    new Site(2, 'bar', 'peru'),
    new Site(3, 'test1', 'germany'),
    new Site(4, 'test2', 'france'),
    new Site(5, 'test3', 'spain'),
    new Site(6, 'test4', 'italy'),
    new Site(7, 'test5', 'usa'),
    new Site(8, 'test6', 'canada')
  ];
}
